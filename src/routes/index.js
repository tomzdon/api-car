const express = require("express");
const router = express.Router();
const controller = require("../controller/file.controller");

let routes = (app) => {
  router.post("/files/:name", controller.download);
  app.use(router);
};

module.exports = routes;
