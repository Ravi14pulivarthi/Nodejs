
 const dbconnect=require("./mongodb")


    const updatedata= async()=>{
       let data=await dbconnect()
        data.updateOne({name:"galaxi",model:"samutoch"},{$set:{name:"mackbook",model:"ultrapro"}})
    }
updatedata()