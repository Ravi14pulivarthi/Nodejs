 const mongoose=require('mongoose')

 mongoose.connect("mongodb://0.0.0.0:27017/Amazon")
 const  datasschema= new mongoose.Schema({
    name:String,
     model:String,
     price:Number,
     year:Number
 })

  const  insert=async ()=>{
     const    ravi=mongoose.model("datas",datasschema)
   let data= new ravi({name:"nokiya",model:"106",price:"1600",year:2020})
   data.save()
   console.log(data)
    }
    //  insert()
   

//    const update=async()=>{
//      const datas= mongoose.model('datas',datasschema)
//       let data=await  datas.updateOne({name:"nokiya"},{$set:{year:2024}})
//     console.log(data)
//     }
//     update()

    // const update=async()=>{
    //     const   datas=mongoose.model("datas",datasschema)
    //      let data=  await datas.updateOne({name:"nokiya"},{$set:{year:2025}})
    //       console.log(data)
    // }
    //  update()


//  const  deletedata=async()=>{
//  const datas=mongoose.model("datas",datasschema)
//   let data= await datas.deleteOne({name:"infiniex"})
//  console.log(data)
// }
//  deletedata()

 const find=async()=>{
     const datas= mongoose.model("datas",datasschema)

      let data= await datas.find({name:"samsung altura plus"})
       console.log(data)
 }
  find()