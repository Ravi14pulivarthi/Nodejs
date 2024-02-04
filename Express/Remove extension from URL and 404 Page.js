 const express=require("express")
 const path= require('path')
  const app = express()

   const publicepath=path.join(__dirname,'publice')
 
    app.get('',(req,resp)=>{
        resp.sendFile(`${publicepath}/index.html`)
    })
    app.get('/about',(req,resp)=>{
        resp.sendFile(`${publicepath}/about.html`)
    })
    app.get('/help',(req,resp)=>{
        resp.sendFile(`${publicepath}/help.html`)
    })
    app.get('*',(req,resp)=>{
        resp.sendFile(`${publicepath}/error.html`)
    })
     app.listen(5000)
