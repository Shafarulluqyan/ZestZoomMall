const express = require("express");
const Controller = require("../controllers/controllerProduct");
const router = express.Router();

router.get("/products", Controller.findAllProduct);

router.get("/products/:_id", Controller.findProductById);

router.post("/products", Controller.addProduct);

router.patch("/products/:_id", Controller.editProduct);

router.delete("/products/:_id", Controller.deleteProduct);

module.exports = router;
