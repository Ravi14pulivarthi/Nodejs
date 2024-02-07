const dbconnect=require("./mongodb")

 const deletedata= async ()=>{
 let data= await dbconnect
  let result= await data.deleteOne({name:"mi"})
  console.log(result)
 }
  deletedata()