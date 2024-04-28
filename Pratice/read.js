 
  const getdata=require("./Mongodb")

//  getdata().then((resp)=>{
// resp.find({name:"apple"}).toArray().then((data)=>{
//      console.log(data)
// })
//  })

const  main=async ()=>{
    let data= await getdata()
     data=await data.find().toArray()
      console.log(data)
 }

  main()