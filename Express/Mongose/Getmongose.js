 const  express =require("express")
 require("./config")
  const Mongosmain=require("./Mongosmain")

    const  app=express()


     app.get("get/",async(req,resp)=>{
        let data=await Mongosmain.find()
         resp.send(data)
     })
    
   app.listen(5002)