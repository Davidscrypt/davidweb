const http = require('http')
const fs = require('fs')
const path = require('path')

const PORT = 3000
const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.jsx': 'application/javascript',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
}

http.createServer((req, res) => {
  let url = req.url === '/' ? '/standalone.html' : req.url
  const filePath = path.join(__dirname, url)
  const ext = path.extname(filePath)
  const contentType = MIME[ext] || 'text/plain'

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404)
      res.end('Not found')
      return
    }
    res.writeHead(200, { 'Content-Type': contentType })
    res.end(data)
  })
}).listen(PORT, () => {
  console.log(`David Web Studio preview running at http://localhost:${PORT}`)
})
