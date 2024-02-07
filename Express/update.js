const  dbconnect= require("./mongodb");

const updatedata = async () => {
  let data = await dbconnect();
  let result = await data.updateOne({name: "mi"},{$set:{name:"mi max pro"}});
  console.log(result);
};
updatedata();
