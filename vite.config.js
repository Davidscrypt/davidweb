import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { sendLead } from './api/_telegram.js'

// Local dev proxy so the contact form works against the real Telegram bot
// while running `vite dev`. In production the same logic lives in the
// serverless function (api/lead.js for Vercel, netlify/functions/lead.js for Netlify).
function leadApiDev(env) {
  return {
    name: 'lead-api-dev',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url !== '/api/lead' || req.method !== 'POST') return next()
        let body = ''
        req.on('data', (c) => (body += c))
        req.on('end', async () => {
          res.setHeader('Content-Type', 'application/json')
          try {
            const data = JSON.parse(body || '{}')
            if (data.company) {
              res.statusCode = 200
              return res.end(JSON.stringify({ ok: true })) // honeypot
            }
            if (!data.name || !data.phone) {
              res.statusCode = 400
              return res.end(JSON.stringify({ error: 'name_phone_required' }))
            }
            const token = env.TELEGRAM_BOT_TOKEN
            const chatId = env.TELEGRAM_CHAT_ID
            if (!token || !chatId) {
              res.statusCode = 500
              return res.end(JSON.stringify({ error: 'server_not_configured' }))
            }
            await sendLead({ token, chatId, data, lang: data.lang })
            res.statusCode = 200
            res.end(JSON.stringify({ ok: true }))
          } catch (e) {
            res.statusCode = 500
            res.end(JSON.stringify({ error: String((e && e.message) || e) }))
          }
        })
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return { plugins: [react(), leadApiDev(env)] }
})
