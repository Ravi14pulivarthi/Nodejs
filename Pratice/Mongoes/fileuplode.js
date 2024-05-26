 const express=require("express")

  const multer=require("multer")
   const app= express()


    const uplode=multer({
      storage:multer.diskStorage({
        destination:function(req,file,cb)
        {
            cb(null,"uplod")
        },
        filename:function(req,file,cb)
        {
            cb(null,file.filename+"-"+Date.now()+".jpg")
        }
      })
    }).single("user-file")
    
    app.post("/uplode",uplode,(req,resp)=>{
      resp.send("file uploded")   
    })
     app.listen(3000)