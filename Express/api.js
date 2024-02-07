 const dbcollection=require('./mongodb')
 const express=require("express")
  const app=express()
   app.use(express.json())

   app.get("/name",async (req,resp)=>{
     let data= await dbcollection()
     data=await data.find().toArray()
    resp.send(data)
   })


    app.post("/",(req,resp)=>{
         console.log(req.body)
        resp.send(req.body)
    })
   app.listen(5000)