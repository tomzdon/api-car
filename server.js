const cors = require("cors");
const express = require("express");
const app = express();

global.__basedir = __dirname;

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));
app.use(express.json());
const initRoutes = require("./src/routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app); 

let port = 8080;
app.listen((process.env.PORT || 5000), () => {
  console.log(`Running at localhost:${process.env.PORT}}`);
});
