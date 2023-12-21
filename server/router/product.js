const express = require("express");
const Controller = require("../controllers/controllerProduct");
const router = express.Router();

router.get("/products", Controller.findAllProduct);

router.get("/products/:id", Controller.findProductById);

module.exports = router;
