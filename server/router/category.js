const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controllerCategory");

router.get("/category", Controller.findAllCategory);

router.get("/category/:_id", Controller.findCategoryById);

router.post("/category", Controller.addCategory);

router.patch("/category/:_id", Controller.editCategory);

router.delete("/category/:_id", Controller.deleteCategory);

module.exports = router;
