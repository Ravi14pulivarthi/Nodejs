 const http=require("http")

  http.createServer((req,resp)=>{
     resp.write("hii")
  }).listen(4500)