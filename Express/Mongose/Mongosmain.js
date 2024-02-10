 const {mongoose}=require('mongoose')

  const productsSchema=mongoose.Schema({
    name:String,
    price:Number,
    model:String,
    year:Number
  })
  module.exports= mongoose.model("data",productsSchema)