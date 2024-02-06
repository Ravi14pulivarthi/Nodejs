
 const {MongoClient}=require('mongodb')
 const url='mongodb://0.0.0.0:27017'
 const databasename="E-commers"
 const client=new MongoClient(url)


async function dbcollection(){
    let result=await client.connect()
    db=result.db(databasename)
    return db.collection("Products")
}

module.exports=dbcollection

























//   const { MongoClient } = require("mongodb");
// const url = "mongodb://0.0.0.0:27017";
// // mongodb://localhost:27017
// const databasename = "E-commers";
// const client = new MongoClient(url);

// async function dbcollection() {
//   let result = await client.connect();
//   db = result.db(databasename);
//   return  db.collection("Products");

// }
//  module.exports=dbcollection