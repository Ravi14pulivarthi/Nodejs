const getdata=require("./mongodb")
 getconect().then((resp)=>{
resp.find({name:"ifb"}).toArray().then((data)=>{
    console.log(data)
})
 })

//  const main=async ()=>{
//    let data = await getconect()
//    data=await data.find({name:"ifb"}).toArray()
//     console.log(data)
//  }
//   main()