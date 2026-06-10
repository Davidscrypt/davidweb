// Shared helper: formats a lead and sends it to Telegram.
// Used by both the serverless function (prod) and the Vite dev proxy (local).
// The bot token never reaches the browser — it lives only in server-side env vars.

const escapeHtml = (s = '') =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .slice(0, 1000)

export async function sendLead({ token, chatId, data, lang }) {
  const rows = [
    '🔔 <b>Новая заявка с сайта</b>',
    '',
    data.name && `👤 <b>Имя:</b> ${escapeHtml(data.name)}`,
    data.phone && `📞 <b>Телефон / WhatsApp:</b> ${escapeHtml(data.phone)}`,
    data.instagram && `🔗 <b>Instagram / ссылка:</b> ${escapeHtml(data.instagram)}`,
    data.business && `🏢 <b>Бизнес:</b> ${escapeHtml(data.business)}`,
    data.goal && `🎯 <b>Цель:</b> ${escapeHtml(data.goal)}`,
    '',
    `🌐 Язык сайта: ${escapeHtml(lang || '—')}`,
  ].filter(Boolean)

  const resp = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: rows.join('\n'),
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    }),
  })

  if (!resp.ok) {
    const body = await resp.text().catch(() => '')
    throw new Error(`Telegram ${resp.status}: ${body}`)
  }
  return true
}
