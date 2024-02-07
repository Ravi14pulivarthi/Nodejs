
 const dbconnect=require("./mongodb")


 const deletedata= async()=>{
    let data= await dbconnect()
    data.deleteOne({name:"note 5ro"})
 }
  deletedata()