const fs=require('fs')
const path=require('path')
const dirPath=path.join(__dirname,"files")
 console.log(dirPath)
    for(let i=1;i<=5;i++){
        fs.writeFileSync(`${dirPath} text${i}.txt`,"hellosome text")
    }

 