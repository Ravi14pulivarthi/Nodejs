const{MongoClient}=require("mongodb")

 const url='mongodb://0.0.0.0:27017'

 const dataname="movieguru"
 const client=new MongoClient(url)

  async function getdata(){
 let  result= await client.connect()
  db=result.db(dataname)
 return db.collection("movies")
//    let data= await collection.find({}).toArray()

  }


  module.exports=getdata