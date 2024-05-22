 const getconect=require("./mongodb")



  const deletedata=async ()=>{
     let data=await getconect()
      data.deleteOne({name:"14promax"})
    console.log(data)
  }

    deletedata()