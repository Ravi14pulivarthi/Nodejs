const{MongoClient}=require("mongodb")


  const url="mongodb://0.0.0.0:27017"
    const databasename="Amazon"
  
  const clint=new MongoClient(url)

    async function getdata(){
         let result=await clint.connect()
          db=result.db(databasename)
        collection=db.collection("datas")
       let data=await collection.find({}).toArray() 
    console.log(data)
    }

     getdata()
