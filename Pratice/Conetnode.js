// const{MongoClient}=require("mongodb")
//   const url="mongodb://0.0.0.0:27017"
//     const databasename="movieguru"
  
//   const clint=new MongoClient(url)

//     async function getdata(){
//          let result=await clint.connect()
//           db=result.db(databasename)
//         collection=db.collection("movies")
//        let data=await collection.find({}).toArray() 
//     console.log(data)
//     }
//      getdata()

     const{MongoClient}=require('mongodb')
     const url="mongodb://0.0.0.0:27017"

      const client=new MongoClient(url)
    
        async function getdata(){
         let result=await client.connect()
         db=result.db("Amazon")
          collection=db.collection("datas")
           let data=await collection.find({}).toArray()
            console.log(data)
       }
    
         getdata()