const express = require("express"); //common js module good for nodejs
// import express form 'express'; //es2015 module for react
const app = express();
app.get("/", (req, res) => {
  res.send({ Hi: "There" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
