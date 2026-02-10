'use client'

import { useRef, useState } from 'react'

const PDF_MIME = 'application/pdf'
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5 MB
const DESCRIPTION_MIN = 10
const DESCRIPTION_MAX = 10000

type Status = 'idle' | 'loading' | 'success' | 'error'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function CVForm() {
  const [file, setFile] = useState<File | null>(null)
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isDragOver, setIsDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const isValid =
    file &&
    file.type === PDF_MIME &&
    file.size <= MAX_FILE_SIZE &&
    EMAIL_REGEX.test(email.trim()) &&
    description.trim().length >= DESCRIPTION_MIN &&
    description.length <= DESCRIPTION_MAX
  const isDisabled = !isValid || status === 'loading'

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault()
    setIsDragOver(true)
  }

  function handleDragLeave(e: React.DragEvent) {
    e.preventDefault()
    setIsDragOver(false)
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    setIsDragOver(false)
    const item = e.dataTransfer.files[0]
    if (!item) return
    if (item.type !== PDF_MIME) {
      setErrorMessage('Envie apenas arquivos PDF.')
      setFile(null)
      return
    }
    if (item.size > MAX_FILE_SIZE) {
      setErrorMessage('O arquivo deve ter no máximo 5 MB.')
      setFile(null)
      return
    }
    setErrorMessage(null)
    setFile(item)
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const item = e.target.files?.[0]
    if (!item) {
      setFile(null)
      return
    }
    if (item.type !== PDF_MIME) {
      setErrorMessage('Envie apenas arquivos PDF.')
      setFile(null)
      return
    }
    if (item.size > MAX_FILE_SIZE) {
      setErrorMessage('O arquivo deve ter no máximo 5 MB.')
      setFile(null)
      return
    }
    setErrorMessage(null)
    setFile(item)
  }

  function removeFile() {
    setFile(null)
    setErrorMessage(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!file || !isValid) return
    setStatus('loading')
    setErrorMessage(null)
    try {
      const formData = new FormData()
      formData.append('cv', file)
      formData.append('email', email.trim())
      formData.append('description', description.trim())
      const res = await fetch('/api/send-cv', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setStatus('error')
        setErrorMessage(
          typeof data?.error === 'string' ? data.error : 'Não foi possível enviar. Tente novamente.'
        )
        return
      }
      setStatus('success')
      setFile(null)
      setEmail('')
      setDescription('')
      if (fileInputRef.current) fileInputRef.current.value = ''
    } catch {
      setStatus('error')
      setErrorMessage('Não foi possível enviar. Tente novamente.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-xl text-left">
      <input
        ref={fileInputRef}
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="sr-only"
        id="cv-upload"
      />
      <div className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-primary-200"
          >
            Seu e-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setErrorMessage(null)
            }}
            placeholder="seu@email.com"
            required
            className="w-full rounded-lg border border-primary-600/50 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-primary-400 focus:border-cta-500 focus:outline-none focus:ring-1 focus:ring-cta-500"
            disabled={status === 'loading'}
          />
          <p className="mt-1 text-xs text-primary-400">
            A primeira otimização é grátis; não é preciso comprar créditos. Nas próximas, use o mesmo e-mail da compra para consumir seus créditos.
          </p>
        </div>
        <div>
          <label
            htmlFor="cv-upload"
            className="mb-2 block text-sm font-medium text-primary-200"
          >
            Seu currículo (PDF)
          </label>
          <div
            role="button"
            tabIndex={0}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                fileInputRef.current?.click()
              }
            }}
            className={`cursor-pointer rounded-lg border-2 border-dashed px-4 py-6 text-center transition-colors ${
              isDragOver
                ? 'border-cta-400 bg-cta-500/10'
                : 'border-primary-600/50 bg-white/5 hover:border-primary-500 hover:bg-white/10'
            }`}
          >
            {file ? (
              <div className="flex items-center justify-center gap-3">
                <span className="truncate text-sm font-medium text-white">
                  {file.name}
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    removeFile()
                  }}
                  className="rounded px-2 py-1 text-xs font-medium text-primary-200 hover:bg-white/10 hover:text-white"
                >
                  Remover
                </button>
              </div>
            ) : (
              <p className="text-sm text-primary-200">
                Arraste o PDF aqui ou clique para selecionar
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="description"
            className="mb-2 block text-sm font-medium text-primary-200"
          >
            Descrição da vaga
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value)
              setErrorMessage(null)
            }}
            placeholder="Cole ou descreva a vaga (requisitos, responsabilidades, etc.)..."
            rows={5}
            maxLength={DESCRIPTION_MAX}
            className="w-full rounded-lg border border-primary-600/50 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-primary-400 focus:border-cta-500 focus:outline-none focus:ring-1 focus:ring-cta-500"
            disabled={status === 'loading'}
            aria-invalid={!!errorMessage}
            aria-describedby={
              description.length > 0
                ? 'description-count'
                : undefined
            }
          />
          <p
            id="description-count"
            className="mt-1 text-right text-xs text-primary-400"
            aria-live="polite"
          >
            {description.length} / {DESCRIPTION_MAX}
          </p>
        </div>

        <div>
          <button
            type="submit"
            disabled={isDisabled}
            className="w-full rounded-lg bg-cta-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-cta-400 active:bg-cta-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === 'loading' ? 'Enviando…' : 'Enviar para customização'}
          </button>
        </div>

        {status === 'success' && (
          <p
            className="text-center text-sm text-cta-300"
            role="status"
            aria-live="polite"
          >
            Enviado! Entraremos em contato.
          </p>
        )}
        {status === 'error' && errorMessage && (
          <p
            className="text-center text-sm text-red-300"
            role="alert"
            aria-live="assertive"
          >
            {errorMessage}
          </p>
        )}
        {errorMessage && status === 'idle' && (
          <p
            className="text-center text-sm text-red-300"
            role="alert"
          >
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  )
}
