 const express=require("express")
 const path= require('path')
  const app = express()

   const publicepath=path.join(__dirname,'publice')
 
    app.use(express.static(publicepath))
     app.listen(5000)