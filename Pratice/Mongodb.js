const {MongoClient}=require('mongodb')
const url="mongodb://0.0.0.0:27017"
 let  dbname='Amazon'
 const client=new MongoClient(url)



   async function getconect(){
     let result=await client.connect()
    db=result.db(dbname)
   return  db.collection("datas")
//    let data= await collection.find({}).toArray()
//      console.log(data)
}
 module.exports=getconect

