'use client'

import { useState, useCallback } from 'react'
import {
  Upload,
  FileText,
  X,
  CheckCircle,
  AlertCircle,
  Loader2,
} from 'lucide-react'
import { Button } from '@/app/components/ui/button'
import { cn } from '@/lib/utils'

const PDF_MIME = 'application/pdf'
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5 MB
const DESCRIPTION_MIN = 10
const DESCRIPTION_MAX = 10000
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type FileStatus = 'idle' | 'uploading' | 'success' | 'error'

export default function CVUploadSection() {
  const [isDragging, setIsDragging] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [fileStatus, setFileStatus] = useState<FileStatus>('idle')
  const [email, setEmail] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{
    type: 'success' | 'error'
    text: string
  } | null>(null)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }, [])

  const validateFile = (f: File): boolean => {
    if (f.type !== PDF_MIME) {
      setSubmitMessage({
        type: 'error',
        text: 'Por favor, envie um arquivo PDF.',
      })
      return false
    }
    if (f.size > MAX_FILE_SIZE) {
      setSubmitMessage({
        type: 'error',
        text: 'O arquivo deve ter no máximo 5 MB.',
      })
      return false
    }
    return true
  }

  const processFile = (f: File) => {
    if (!validateFile(f)) return
    setSubmitMessage(null)
    setFile(f)
    setFileStatus('uploading')
    setTimeout(() => setFileStatus('success'), 800)
  }

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    const files = e.dataTransfer.files
    if (files.length > 0) processFile(files[0])
  }, [])

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files?.length) processFile(files[0])
  }

  const removeFile = () => {
    setFile(null)
    setFileStatus('idle')
    setSubmitMessage(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitMessage(null)
    if (!file || fileStatus !== 'success') {
      setSubmitMessage({
        type: 'error',
        text: 'Por favor, faça upload do seu CV primeiro.',
      })
      return
    }
    if (!EMAIL_REGEX.test(email.trim())) {
      setSubmitMessage({
        type: 'error',
        text: 'Informe um e-mail válido.',
      })
      return
    }
    const desc = jobDescription.trim()
    if (desc.length < DESCRIPTION_MIN) {
      setSubmitMessage({
        type: 'error',
        text: 'A descrição da vaga deve ter pelo menos 10 caracteres.',
      })
      return
    }
    if (desc.length > DESCRIPTION_MAX) {
      setSubmitMessage({
        type: 'error',
        text: 'A descrição da vaga deve ter no máximo 10.000 caracteres.',
      })
      return
    }

    setIsSubmitting(true)
    try {
      const formData = new FormData()
      formData.append('cv', file)
      formData.append('email', email.trim())
      formData.append('description', desc)
      const res = await fetch('/api/send-cv', { method: 'POST', body: formData })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setSubmitMessage({
          type: 'error',
          text: typeof data?.error === 'string' ? data.error : 'Tente novamente mais tarde.',
        })
        return
      }
      setSubmitMessage({
        type: 'success',
        text: 'CV enviado com sucesso! Você receberá seu CV customizado em breve.',
      })
      setFile(null)
      setFileStatus('idle')
      setEmail('')
      setJobDescription('')
    } catch {
      setSubmitMessage({
        type: 'error',
        text: 'Não foi possível enviar. Tente novamente.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="upload" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comece <span className="text-gradient">agora</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Faça upload do seu CV e cole a descrição da vaga para começar
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-8 shadow-soft">
            {/* Drop Zone */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={cn(
                'relative border-2 border-dashed rounded-xl p-8 transition-all duration-200 mb-6',
                isDragging
                  ? 'border-primary bg-primary/5 scale-[1.02]'
                  : 'border-muted-foreground/25 hover:border-primary/50 hover:bg-muted/50',
                file && 'border-solid'
              )}
            >
              {!file ? (
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Upload className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    Arraste seu CV aqui
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    ou clique para selecionar um arquivo
                  </p>
                  <p className="text-sm text-muted-foreground">
                    PDF (máx. 5MB)
                  </p>
                  <input
                    type="file"
                    accept=".pdf,application/pdf"
                    onChange={handleFileInput}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        'w-12 h-12 rounded-lg flex items-center justify-center',
                        fileStatus === 'success' && 'bg-accent/10',
                        fileStatus === 'error' && 'bg-destructive/10',
                        fileStatus === 'uploading' && 'bg-primary/10'
                      )}
                    >
                      <FileText
                        className={cn(
                          'w-6 h-6',
                          fileStatus === 'success' && 'text-accent',
                          fileStatus === 'error' && 'text-destructive',
                          fileStatus === 'uploading' && 'text-primary'
                        )}
                      />
                    </div>
                    <div>
                      <p className="font-medium">{file.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {fileStatus === 'uploading' && (
                      <Loader2 className="w-5 h-5 text-primary animate-spin" />
                    )}
                    {fileStatus === 'success' && (
                      <CheckCircle className="w-5 h-5 text-accent" />
                    )}
                    {fileStatus === 'error' && (
                      <AlertCircle className="w-5 h-5 text-destructive" />
                    )}
                    <button
                      type="button"
                      onClick={removeFile}
                      className="p-1 hover:bg-muted rounded-full transition-colors"
                      disabled={isSubmitting}
                      aria-label="Remover arquivo"
                    >
                      <X className="w-5 h-5 text-muted-foreground" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-2 text-foreground">
                Seu e-mail
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="w-full h-11 px-4 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                disabled={isSubmitting}
              />
            </div>

            <div className="mb-6">
              <label className="block font-medium mb-2 text-foreground">
                Descrição da Vaga
              </label>
              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Cole aqui a descrição completa da vaga para qual você está se candidatando..."
                className="w-full h-40 px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                disabled={isSubmitting}
                maxLength={DESCRIPTION_MAX}
              />
              <p className="mt-1 text-right text-xs text-muted-foreground">
                {jobDescription.length} / {DESCRIPTION_MAX}
              </p>
            </div>

            <Button
              type="submit"
              variant="hero"
              size="xl"
              className="w-full"
              disabled={!file || fileStatus !== 'success' || isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                'Customizar Meu CV'
              )}
            </Button>

            {submitMessage && (
              <p
                className={cn(
                  'mt-4 text-center text-sm',
                  submitMessage.type === 'success' && 'text-accent',
                  submitMessage.type === 'error' && 'text-destructive'
                )}
                role={submitMessage.type === 'error' ? 'alert' : 'status'}
              >
                {submitMessage.text}
              </p>
            )}

            <p className="text-center text-sm text-muted-foreground mt-4">
              Seus dados estão seguros e não são compartilhados com terceiros
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
