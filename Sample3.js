
 const http = require('http')

  http.createServer((req,resp)=>{
     resp.writeHead(200,{'content':"application/json"})
     resp.write(JSON.stringify({name:"Ravi kumarPulivarthi"}))
     resp.end()
  }).listen(5000)


