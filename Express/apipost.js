const dbcollection=require("./mongodb")
 const  expres = require('express')
  const app=expres()


    app.use(expres.json())
  app.post("/", async (req,resp)=>{
     let  data=  await dbcollection()
     const result =data.insertOne(req.body)
      console.log(result)
      
   })
   app.listen(5000)