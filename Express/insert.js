
 let dbconnect=require("./mongodb")

   let insertdata=async()=>{
       let data=await dbconnect()
         let result= await data.insertOne({name:"galaxi",model:"samutoch",price:45000,year:2025})
          if( result.acknowledge){
            console.log("inserted")
          }

   }

    insertdata()

