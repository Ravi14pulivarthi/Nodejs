 
  const { create } = require('domain')
const  fs=require('fs')

   const path= require("path")
  

    // create

   fs.writeFileSync(` Text.txt`,"Ravikumar")


  //  read
   fs.readFile("Text.txt",(err,iteam)=>{
  console.log(iteam.toLocaleString())
   })
   
  // update
   fs.appendFile("Text.txt"," Ravi  kumar pulivarthi",(err)=>{
     if( !err){
        console.log(" file is updated")
     } })

      // rename
 fs.rename("Text.txt","Ravi.txt",(err)=>{
  if( !err){
          console.log(" file is updated")
       } 
 })

  // delete

 fs.unlinkSync("Text.txt")