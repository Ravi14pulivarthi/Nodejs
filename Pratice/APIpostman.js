const express=require("express")
 require("./configer")
  const datas= require("./scameandmodel")
 const app=express()
 app.use(express.json())

  app.post("/",async(req,resp)=>{
     let data=new datas(req.body)
     let result=await  data.save()
      resp.send(result)
  })
 app.get("/get",async(req,resp)=>{
    let data= await datas.find()
  resp.send(data)
})


 app.delete("/delete/:_id",async (req,resp)=>{
     let data= await datas.deleteOne(req.params)
       resp.send(data)
        
 })

  app.put("/update/:_id", async(req,resp)=>{
     let data=await  datas.updateOne(req.params,
      {$set:req.body}
     )
      resp.send(data)
  })
  
   app.listen(3000)