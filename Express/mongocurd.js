const {  mongoose } = require('mongoose')



     mongoose.connect('mongodb://0.0.0.0:27017/Amazon')
   const productsSchema= new mongoose.Schema({
      name:String,
      model:String,
      price:Number,
      year:Number
      
   })
   const main= async()=>{
    const Product= mongoose.model('data',productsSchema)
    let data =new Product ({name:'max 121',model:"promax",price:7648,year:2023})
    const result=await data.save();
     console.log(result)
}
//  main()

 const updateID= async ()=>{
    const Product= mongoose.model('data',productsSchema)
     let data= await Product.updateOne(
        {name:"apple"},
        {$set:{price:123456}}
     )
      console.log(data)
 }
//   updateID()
 

 const  deleteId=async ()=>{
   const Product= mongoose.model('data',productsSchema)
    let data = await Product.deleteOne({name:"max 121"})
     console.log(data)
 }
//   deleteId()

  const  find=async ()=>{
   const Product= mongoose.model('data',productsSchema)
    let data = await Product.find({name:"apple"})
     console.log(data)
 }
  find()