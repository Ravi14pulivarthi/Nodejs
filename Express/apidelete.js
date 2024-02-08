 const dbcollection=require("./mongodb")
  const express=require("express")
   const app=express()
    const mongodb=require("mongodb")




    app.delete("/:id",async (req,resp)=>{
        
         console.log(req.params.id)
          let data= await dbcollection()
           const result= await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
        resp.send(result)
    })
     app.listen(5002)