 const getconect=require("./mongodb")



  const updatedata=async ()=>{
     let data = await getconect()


      let result=await data.updateOne({name:"15promax"},{$set:{name:"15promaxplus"}})
     console.log(result)
  }

  updatedata()