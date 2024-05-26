 const express=require('express')
  require("./config")
  const datas=require("./datas")
   const app=express()
     app.use(express.json())

    // app.post("/creat",async (req,resp)=>{
    //      let data= new datas(req.body)
    //       let result= await data.save()
         
    //      console.log(result)
    //        resp.send(req.body)
    // })
    //  app.get("/list",async (req,resp)=>{
    //      let data=  await  datas.find()
    //        console.log(data)
    //        resp.send(data)
    //  })
    //  app.delete("/delete/:_id",async(req,resp)=>{
    //      let data= await datas.deleteOne( req.params)
    //   resp.send(data)
    //     })

     app.put("/put/:_id",async(req,resp)=>{
  let data=  await datas.updateOne( req.params,{$set: req.body})
 resp.send(data)
})

     app.listen(5500)