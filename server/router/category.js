const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controllerCategory");

router.get("/category", Controller.findAllCategory);

router.get("/category/:id", Controller.findCategoryById);

router.post("/category", Controller.addCategory);

router.patch("/category/:id", Controller.editCategory);

router.delete("/category/:id", Controller.deleteCategory);

module.exports = router;
