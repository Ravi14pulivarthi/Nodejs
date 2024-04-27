 const{MongoClient}=require("mongodb")
const { Collection } = require("mongoose")

  const url="mongodb://localhost:27017"
    const databasename="Amazon"
  
  const clint=new MongoClient(url)

    async function getdata(){
         let result=await clint.connect()
          db=result.db(databasename)
        collection=db.collection("datas")
       let data=await collection.find({}.toArray)  
    console.log(data)
    }

     getdata()

 console.log("ravikumar")