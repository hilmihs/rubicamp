const http = require('http')
const fs = require('fs')
const content = fs.readFileSync('./home.html', 'utf-8')
http.createServer(function(req,res){ 
 res.writeHead(200, {"Content-Type": "text/plain"})
 res.end(content)
}).listen(3000)