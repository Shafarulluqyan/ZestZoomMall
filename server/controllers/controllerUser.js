const Model = require("../Models/modelUser");

class Controller {
  static async userFindAll(req, res) {
    try {
      const users = await Model.userFindAll();
      res.status(200).json(users);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  static async userFindOne(req, res) {
    try {
      const { id } = req.params;
      const user = await Model.userFindOne(id);
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  static async postUser(req, res) {
    try {
      const {
        username,
        email,
        password,
        phoneNumber,
        address,
        profilePicture,
      } = req.body;
      const user = {
        username,
        email,
        password,
        phoneNumber,
        address,
        profilePicture,
      };
      const result = await Model.addUser(user);
      res.status(201).json({ message: "Success add new User" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  static async editUser(req, res) {
    try {
      const { id } = req.params;
      const {
        username,
        email,
        password,
        phoneNumber,
        address,
        profilePicture,
      } = req.body;

      const updatedUser = {
        username,
        email,
        password,
        phoneNumber,
        address,
        profilePicture,
      };

      const result = await Model.editUser(id, updatedUser);
      res.status(200).json({ message: "Success edit User" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const user = await Model.deleteUser(id);
      res.status(200).json({ message: "Success delete User" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
module.exports = Controller;
