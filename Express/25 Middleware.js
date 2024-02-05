const express = require("express");

const app = express();

const reqfilter = (req, resp, next) => {
  if (!req.query.age) {
    resp.send("plese provide your  age");
  } 
  else if (req.query.age<18) {
    resp.send(" the user must be above  age of 18");
  } 
  else {
    next();
  }
};
app.use(reqfilter);

app.get("/", (req, resp) => {
  resp.send("welcome to home page");
});

app.get("/ravi", (req, resp) => {
  resp.send("hii ravi is good boy ");
});
app.listen(5000);
