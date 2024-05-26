 const mongoose= require("mongoose")
  const  datasschema=mongoose.Schema({
     name:String,
    model:String,
    price:Number,
    year:Number

  })
    module.exports=mongoose.model("datas",datasschema)