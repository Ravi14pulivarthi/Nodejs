
      const express=require("express")
       const path=require('path')
        const app=express()

 const publicpath=path.join(__dirname,"publice")
   app.use(express.static(publicpath))
 app.listen(5000)