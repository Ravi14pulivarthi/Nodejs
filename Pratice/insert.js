const getdata = require("./Mongodb");

async function insertdata() {
  let data = await getdata();
  data.insertMany([
    { name: "robo", year: 2009, categeory: "thrialar" },
    { name: "rob2", year: 2013, categeory: "thrialar" },
    { name: "kaidino1", year: 2020, categeory: "comady" },
  ]);
}

insertdata();
