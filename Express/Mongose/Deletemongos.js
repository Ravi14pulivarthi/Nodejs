 const  express=require("express")
 require("./config")
 const  Mongosemain= require("./Mongosmain")
  const app=express()

app.use(express.json())
    app.delete("/delete/:_id",async(req,resp)=>{
        console.log(req.params)
         let data= await Mongosemain.deleteOne(req.params)
        resp.send(data)
    })
     app.listen(5003)