 const dbcollection=require('./mongodb')
 const express=require("express")
  const app=express()

   
   app.get("/name",async (req,resp)=>{
     let data= await dbcollection()
     data=await data.find().toArray()
    resp.send(data)
   })

   app.listen(5000)