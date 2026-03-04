import nodemailer from 'nodemailer'

export function createTransporter() {
  const smtpHost = process.env.SMTP_HOST?.trim()
  const smtpPort = process.env.SMTP_PORT?.trim()
  const smtpUser = process.env.SMTP_USER?.trim()
  const smtpPass = (process.env.SMTP_PASS ?? '')
    .replace(/\s/g, '')
    .replace(/^["']|["']$/g, '')
    .trim()

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
    throw new Error('Variáveis de ambiente SMTP ausentes')
  }

  const port = Number(smtpPort)
  return nodemailer.createTransport({
    host: smtpHost,
    port,
    secure: port === 465,
    ...(port === 587 && { requireTLS: true }),
    auth: { user: smtpUser, pass: smtpPass },
  })
}

export async function sendPaymentNotificationEmail({
  buyerEmail,
  credits,
  price,
  paymentId,
}: {
  buyerEmail: string
  credits: number
  price: number
  paymentId: string | number
}) {
  const recipientEmail = process.env.RECIPIENT_EMAIL?.trim()
  const smtpUser = process.env.SMTP_USER?.trim()

  if (!recipientEmail || !smtpUser) {
    throw new Error('RECIPIENT_EMAIL ou SMTP_USER ausente')
  }

  const transporter = createTransporter()

  const date = new Date().toLocaleString('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
    timeZone: 'America/Sao_Paulo',
  })

  await transporter.sendMail({
    from: smtpUser,
    to: recipientEmail,
    subject: `Nova compra de créditos — ${buyerEmail} — ${credits} crédito${credits !== 1 ? 's' : ''}`,
    text: [
      `Nova compra aprovada no CVMatch`,
      ``,
      `E-mail do comprador: ${buyerEmail}`,
      `Pacote: ${credits} crédito${credits !== 1 ? 's' : ''}`,
      `Valor: R$ ${price}`,
      `ID do pagamento: ${paymentId}`,
      `Data: ${date}`,
    ].join('\n'),
    html: `
      <p><strong>Nova compra aprovada no CVMatch</strong></p>
      <table cellpadding="6" cellspacing="0">
        <tr><td><strong>E-mail do comprador:</strong></td><td>${buyerEmail}</td></tr>
        <tr><td><strong>Pacote:</strong></td><td>${credits} crédito${credits !== 1 ? 's' : ''}</td></tr>
        <tr><td><strong>Valor:</strong></td><td>R$ ${price}</td></tr>
        <tr><td><strong>ID do pagamento:</strong></td><td>${paymentId}</td></tr>
        <tr><td><strong>Data:</strong></td><td>${date}</td></tr>
      </table>
    `.trim(),
  })
}
