 const getconect=require("./mongodb")


  const insertdata=async ()=>{
  let data= await getconect()
   data.insertMany(
  [
    {name:"14promax",brand:"apple",model:"iphone",year:"2023"},
    {name:"15promax",brand:"apple",model:"iphone",year:"2024"},
    {name:"16promax",brand:"apple",model:"iphone",year:"2025"},
  ]

   )
  }
   insertdata()