 const express=require('express')

  const app=express()
   

   app.get("",(req,resp)=>{
    resp.send(`<h1>hii, this is homes</h1>
    <a href="/about">About</a>`)
   })
   app.get("/about",(req,resp)=>{
    resp.send(`<input type="text"  placeholder="type name"/>
     <button>Click me ok </button>
     <a href="/">Home</a>`)
   })
   app.get("/help",(req,resp)=>{
    resp.send([{name:'ravikumar',study:"mca",age:25}])
   })
 app.listen(5000)