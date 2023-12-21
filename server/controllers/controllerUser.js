const Model = require("../Models/modelUser");
const {
  hashPass,
  comparePass,
  createToken,
  verifyToken,
} = require("../helpers/auth");
const bcrypt = require("bcryptjs");

class Controller {
  static async register(req, res) {
    try {
      const {
        username,
        email,
        password,
        phoneNumber,
        address,
        profilePicture,
      } = req.body;
      if (!username || !email || !password) {
        return res.status(400).json({ message: "Every field is required" });
      }
      const checkUser = await Model.findByEmail(email);
      if (checkUser) {
        return res.status(400).json({ message: "Email is not unique" });
      }
      const newUser = await Model.postUser({
        ...req.body,
        password: hashPass(req.body.password),
      });
      // console.log(newUser, "new user");

      res
        .status(201)
        .json({ message: `${newUser.username} has been added`, newUser });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }
      if (!password) {
        return res.status(400).json({ message: "Password is required" });
      }
      const user = await Model.findByEmail(email);
      console.log(user, "<< user");
      if (!user) {
        return res.status(401).json({ message: "Invalid email/password" });
      }
      const isValidPassword = bcrypt.compareSync(password, user.password);
      console.log(isValidPassword, "< valid ga?");
      if (!isValidPassword) {
        return res.status(401).json({ message: "Invalid email/password" });
      }
      let access_token = createToken({ id: user.id });

      res.status(200).json({ access_token, user });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

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
