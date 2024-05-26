 const mongoose=require("mongoose")

  const dataschem=mongoose.Schema({
    name:String,
    model:String,
    price:Number,
    year:Number

  })

    module.exports= mongoose.model("datas",dataschem)