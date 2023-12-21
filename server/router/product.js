const express = require("express");
const Controller = require("../controllers/controllerProduct");
const router = express.Router();

router.get("/products", Controller.findAllProduct);

router.get("/products/:id", Controller.findProductById);

router.post("/products", Controller.addProduct);

router.patch("/products/:id", Controller.editProduct);

router.delete("/products/:id", Controller.deleteProduct);

module.exports = router;
