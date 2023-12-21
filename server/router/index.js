const express = require("express");
const router = express.Router();
const product = require("./product");
const user = require("./user");
const category = require("./category");

router.use(product);

router.use(category);

router.use(user);

module.exports = router;
