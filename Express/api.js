 const dbcollection=require('./mongodb')
 const express=require("express")
  const app=express()


   app.get("/",async (req,resp)=>{
     let data= await dbcollection()
    resp.send(await data.find().toArray()) 
    
   })

   app.listen(5000)