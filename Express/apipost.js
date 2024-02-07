 const dbcollection=require("./mongodb")
  const express=require("express")
 const app=express()


  app.use(express.json())
 app.post("/",async (req,resp)=>{
  let data= await dbcollection()
   let result= await data.insertOne(req.body)
    resp.send(result)
  })
   app.listen(5000)