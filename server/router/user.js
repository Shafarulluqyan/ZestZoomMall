const express = require("express");
const Controller = require("../controllers/controllerUser");
const router = express.Router();

router.get("/users", Controller.userFindAll);

router.get("/users/:id", Controller.userFindOne);

router.post("/users", Controller.postUser);

router.patch("/users/:id", Controller.editUser);

router.delete("/users/:id", Controller.deleteUser);

module.exports = router;
