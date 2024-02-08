 const  dbcollection=require("./mongodb")
 const express=require("express")
const app=express()

 app.use(express.json())
 app.put("/:name", async (req,resp)=>{
 console.log(req.body)
    let data=  await dbcollection()
     let result = await data.updateOne({name:req.params.name},{$set:req.body})
     resp.send(result)

 })
   app.listen(5001)