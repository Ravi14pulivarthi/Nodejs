module.exports = (req, resp, next) => {
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