const cors = require("cors");
const express = require("express");
const fs = require("fs");
const app = express();
const serverless = require("serverless-http");
const router = express.Router();

global.__basedir = __dirname;

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
router.post("/:name", (req, res) => {
  const fileName = req.params.name;
  const aut = req.body.aut;
  const directoryPath = "/functions/resources/static/assets/uploads/";
  console.log(__basedir)
  if (aut != "codesample") {
    res.status(401).send({
      message: "Unatorized",
    });
  } else {
    res.download(directoryPath + fileName, fileName, (err) => {
      if (err) {
        res.status(500).send({
          message: "Could not download the file. " + err,
        });
      }
    });
  }
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
