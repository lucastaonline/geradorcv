import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5 MB
const DESCRIPTION_MIN = 10
const DESCRIPTION_MAX = 10000
const PDF_MIME = 'application/pdf'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const cv = formData.get('cv') as File | null
    const email = (formData.get('email') as string | null)?.trim() ?? ''
    const description = formData.get('description') as string | null

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Informe um e-mail válido.' },
        { status: 400 }
      )
    }

    if (!cv || typeof cv === 'string') {
      return NextResponse.json(
        { error: 'Envie um currículo em PDF.' },
        { status: 400 }
      )
    }

    if (cv.type !== PDF_MIME) {
      return NextResponse.json(
        { error: 'O currículo deve ser um arquivo PDF.' },
        { status: 400 }
      )
    }

    if (cv.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'O arquivo deve ter no máximo 5 MB.' },
        { status: 400 }
      )
    }

    const desc = description?.trim() ?? ''
    if (desc.length < DESCRIPTION_MIN) {
      return NextResponse.json(
        { error: 'A descrição da vaga deve ter pelo menos 10 caracteres.' },
        { status: 400 }
      )
    }
    if (desc.length > DESCRIPTION_MAX) {
      return NextResponse.json(
        { error: 'A descrição da vaga deve ter no máximo 10.000 caracteres.' },
        { status: 400 }
      )
    }

    const recipientEmail = process.env.RECIPIENT_EMAIL?.trim()
    const smtpHost = process.env.SMTP_HOST?.trim()
    const smtpPort = process.env.SMTP_PORT?.trim()
    const smtpUser = process.env.SMTP_USER?.trim()
    // Remove espaços e aspas da senha de app (Gmail exibe "xxxx xxxx xxxx xxxx")
    const smtpPass = (process.env.SMTP_PASS ?? '')
      .replace(/\s/g, '')
      .replace(/^["']|["']$/g, '')
      .trim()

    if (!recipientEmail || !smtpHost || !smtpPort || !smtpUser || !smtpPass) {
      console.error('Send CV: missing env RECIPIENT_EMAIL or SMTP_*')
      return NextResponse.json(
        { error: 'Configuração de e-mail indisponível. Tente mais tarde.' },
        { status: 500 }
      )
    }

    const port = Number(smtpPort)
    const buffer = Buffer.from(await cv.arrayBuffer())
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port,
      secure: port === 465,
      // Gmail na porta 587 usa STARTTLS; garantir que não use SSL direto
      ...(port === 587 && { requireTLS: true }),
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    const date = new Date().toLocaleString('pt-BR', {
      dateStyle: 'short',
      timeStyle: 'short',
    })

    const textBody = `E-mail do usuário: ${email}\n\nDescrição da vaga:\n\n${desc}`
    const htmlBody = `
      <p><strong>E-mail do usuário:</strong> ${escapeHtml(email)}</p>
      <p><strong>Descrição da vaga:</strong></p>
      <pre style="white-space:pre-wrap;font-family:inherit;">${escapeHtml(desc)}</pre>
    `.trim()

    await transporter.sendMail({
      from: smtpUser,
      to: recipientEmail,
      subject: `Novo CV Tailor - ${email} - ${date}`,
      text: textBody,
      html: htmlBody,
      attachments: [
        {
          filename: cv.name || 'curriculo.pdf',
          content: buffer,
        },
      ],
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Send CV error:', err)
    return NextResponse.json(
      { error: 'Não foi possível enviar. Tente novamente mais tarde.' },
      { status: 500 }
    )
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
