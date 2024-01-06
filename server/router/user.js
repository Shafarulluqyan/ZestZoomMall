const express = require("express");
const Controller = require("../controllers/controllerUser");
const router = express.Router();

router.post("/login", Controller.login);

router.post("/users", Controller.addUser);

router.get("/users", Controller.userFindAll);

router.get("/users/:_id", Controller.userFindOne);

router.patch("/users/:_id", Controller.editUser);

router.delete("/users/:_id", Controller.deleteUser);

module.exports = router;
