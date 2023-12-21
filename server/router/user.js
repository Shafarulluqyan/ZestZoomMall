const express = require("express");
const Controller = require("../controllers/controllerUser");
const router = express.Router();

router.post("/register", Controller.register);

router.post("/login", Controller.login);

router.get("/users", Controller.userFindAll);

router.get("/users/:id", Controller.userFindOne);

router.patch("/users/:id", Controller.editUser);

router.delete("/users/:id", Controller.deleteUser);

module.exports = router;
