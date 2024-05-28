const express = require("express");
const con = require("./config");
const app = express();
app.use(express.json())
app.get("/", (req, resp) => {
  con.query("select * from users", (err, result) => {
    if (err) {
      resp.send("error in api");
    } else {
      resp.send(result);
    }
  });
});

 app.post("/",(req,resp)=>{
  const  data= req.body
    con.query("INSERT INTO users SET?",data,(err,result,field)=>{
      if(err) throw err
       else{
        resp.send(result)
       }
    })
 })



app.listen(4500);
