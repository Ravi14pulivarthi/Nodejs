const express = require("express");
 const reqfilter=require("./26Middleware")
const app = express();

 const route=express.Router()


// app.use(reqfilter);
 route.use(reqfilter)
app.get("/", (req, resp) => {
  resp.send("welcome to home page");
});

route.get("/ravi", (req, resp) => {
  resp.send("hii ravi is good boy ");
});
 app.get("/about",(req,resp)=>{
    resp.send("about page is welcomming you")
 })
 route.get("/contact",(req,resp)=>{
    resp.send(" well come to concat page ")
 })

  app.use("/",route)
app.listen(5000);
