
 const express=require('express')
 require("./config")
  const Mongosmain=require("./Mongosmain")

    const app=express()
     

     app.use(express.json())
     app.post("/creat",async (req,resp)=>{
         let data=new Mongosmain(req.body)
       const result= await data.save()
       resp.send(result) 
     })
      app.listen(5500)