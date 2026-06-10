// Vercel serverless function → POST /api/lead
import { sendLead } from './_telegram.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'method_not_allowed' })
    return
  }
  try {
    const data =
      typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {}

    // Honeypot: silently accept bots without notifying
    if (data.company) {
      res.status(200).json({ ok: true })
      return
    }
    if (!data.name || !data.phone) {
      res.status(400).json({ error: 'name_phone_required' })
      return
    }

    const token = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID
    if (!token || !chatId) {
      res.status(500).json({ error: 'server_not_configured' })
      return
    }

    await sendLead({ token, chatId, data, lang: data.lang })
    res.status(200).json({ ok: true })
  } catch (e) {
    res.status(500).json({ error: 'send_failed' })
  }
}
