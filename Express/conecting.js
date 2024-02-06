 const dbnames=require("./mongodb")

dbnames().then((resp)=>{
   resp.find().toArray().then((data)=>{
      console.log(data)
   })
})



   