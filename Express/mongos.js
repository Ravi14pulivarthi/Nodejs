 const {  mongoose } = require('mongoose')


  const main= async()=>{
     await  mongoose.connect('mongodb://0.0.0.0:27017/Amazon')
     const productsSchema= new mongoose.Schema({
        name:String,
        model:String,
        price:Number,
        year:Number
        
     })
      const Product= mongoose.model('data',productsSchema)
      let data =new Product ({name:'max 121',model:"promax",price:7648,year:2023})
      const result=await data.save();
       console.log(result)
  }
   main()