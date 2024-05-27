const mysql =require("mysql");

const con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "chatbot",
});

con.connect((err) => {
  if (err) {
    console.log("error");
  } else {
    console.log("connected");
  }
});
con.query("select * from users",(err,result)=>{
    console.log("result",result)
})
