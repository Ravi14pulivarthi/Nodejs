 const express= require("express")

 require("./config")

  const datas=require("./datas")
   const app =express()
  app.use(express.json())

    app.get("/gets/:key",async(req,resp)=>{
         let data= await datas.find(
            {
                "$or":[
                    {name:{$regex:req.params.key}}
                ]
            }
         )
             resp.send(data)
              
    })
    

     app.listen(4000)