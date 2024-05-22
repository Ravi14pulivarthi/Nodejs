  const getconect=require("./mongodb")
   const express=require("express")
 const mongodb=require("mongodb")
    const app=express()
  app.use(express.json())

    //  app.get("/mobiles",async (res,resp)=>{
    //          let data= await getconect()
    //       data= await data .find().toArray()
    //      resp.send(data)
    //  })


    //   app.post("/",async(req,resp)=>{
    //     //  let data=getconect()
    //        let data= await getconect()
    //          let result=await data.insertOne(req.body)
    //       resp.send(result)
    //   })



    //  app.put("/:name",async(req,resp)=>{
    //      let data= await getconect()

    //    let result=await   data.updateOne({name: req.params.name},{$set:req.body})
    //     console.log(req.body)
    //      resp.send(result)
    //  })


     app.delete("/:id",async(req,resp)=>{

         let data=await getconect()
          let result=await data.deleteOne({_id: new mongodb(req.params.id)})
         resp.send(result)
     })



      app.listen(4500)