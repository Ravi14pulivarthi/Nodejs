 const  express=require("express")

  require("./config")
  const Mongosemain=require("./Mongosmain")
   let app=express()


    app.use(express.json())
    app.get("/search/:key",async (req,resp)=>{
 let data = await Mongosemain.find( {"$or":[{name:{$regex:req.params.key}}]})
     resp.send(data)
    })
     app.listen(5100)