const {MongoClient} = require("mongobd");
const url = "mongodb://localhost:27017";
const batabasename = "E-commers";
const client = new MongoClient(url);

async function getData() {
  let result = await client.connect();
  db = result.db(batabasename);
  collection = db.collection("Products");
  let data = await collection.find({}).toArray();
  console.log(data);
}

getData();
