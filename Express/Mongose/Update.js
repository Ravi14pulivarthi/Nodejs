 const express= require("express")
require("./config")
  const Mongosemain=require("./Mongosmain")
   let app=express()

   app.use(express.json())


    app.update("update",(req,resp)=>{

    })
     app.listen(5004)