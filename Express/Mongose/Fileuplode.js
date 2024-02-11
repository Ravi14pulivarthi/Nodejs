const express = require("express");
const multer = require("multer");

let app = express();

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, resp, cb) {
      cb(null,"upload");
    },
    filename: function (req, resp, cb) {
      cb(null,file.fieldname + "-" + Date.now()+".jpg");
    },
  }),
}).single("user-file")
app.post("/upload",upload , (req, resp) => {
  resp.send("uplode data file ");
});

app.listen(5000);
