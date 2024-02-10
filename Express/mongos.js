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
      let data =new Product ({name:'mi',model:"ultrapro",price:3048,year:2025})
      const result=await data.save();
       console.log(result)
  }
   main()