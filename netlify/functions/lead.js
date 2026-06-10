// Netlify function → /.netlify/functions/lead (mapped to /api/lead via netlify.toml)
import { sendLead } from '../../api/_telegram.js'

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'method_not_allowed' }) }
  }
  try {
    const data = JSON.parse(event.body || '{}')

    // Honeypot: silently accept bots without notifying
    if (data.company) {
      return { statusCode: 200, body: JSON.stringify({ ok: true }) }
    }
    if (!data.name || !data.phone) {
      return { statusCode: 400, body: JSON.stringify({ error: 'name_phone_required' }) }
    }

    const token = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID
    if (!token || !chatId) {
      return { statusCode: 500, body: JSON.stringify({ error: 'server_not_configured' }) }
    }

    await sendLead({ token, chatId, data, lang: data.lang })
    return { statusCode: 200, body: JSON.stringify({ ok: true }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: 'send_failed' }) }
  }
}
