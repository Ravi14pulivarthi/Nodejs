  console.log(process.argv[4])



 
//   fs.writeFileSync("Test3.txt","This is dummy text file")

const fs = require('fs')
 const input = process.argv;
 if( input[2]=="add"){
    fs.writeFileSync(input[3],input[4])
 }
 else if( input[2]=="remove"){
    fs.unlinkSync(input[3])
 }
  else{
    console.log("invalied thing")
  }