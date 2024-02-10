 const express= require("express")
require("./config")
  const Mongosemain=require("./Mongosmain")
   let app=express()

   app.use(express.json())


    app.post("/update/:_id",async(req,resp)=>{
 console.log(req.params)
  let data=await  Mongosemain.updateOne(req.params,
    {$set:req.body})
    resp.send(data)
    })
     app.listen(5004)
      