const { getDb } = require("../config/mongo");
const { ObjectId } = require("mongodb");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const SECRET = process.env.JWT_SECRET;
const { hashPass, comparePass, createToken, verifyToken } = require("../helpers/auth");


class Model {
  static async register(user) {
    try {
      const users = getDb().collection("users");

      // Hash the password
      const hashedPassword = await bcrypt.hash(user.password, 10);

      const userToInsert = {
        ...user,
        password: hashedPassword,
      };

      const result = await users.insertOne(userToInsert);
      return { id: result.insertedId, ...user };
    } catch (error) {
      throw error;
    }
  }

  static async login(email, password) {
    try {
      const users = getDb().collection("users");

      const user = await users.findOne({ email: email });
      console.log(user, "<ini si user");
      if (!user) {
        return null;
      }
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return null;
      }
      const token = jwt.sign({ userId: user._id }, SECRET);
      console.log(token);
      return token;
    } catch (error) {
      throw error;
    }
  }

  static async userFindAll() {
    try {
      const users = getDb().collection("users");
      const data = await users
        .find({}, { projection: { password: 0 } })
        .toArray();
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async userFindOne(id) {
    try {
      const user = getDb().collection("users");
      const data = await user.findOne(
        {
          _id: new ObjectId(id),
        },
        { projection: { password: 0 } }
      );
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async findByEmail(email) {
    try {
      const users = getDb().collection("users");
      const user = await users.findOne({ email: email });
      return user;
    } catch (err) {
      throw err;
    }
  }

  static async postUser(user) {
    try {
      const users = getDb().collection("users");

      const newUser = await users.insertOne(user);
      return await users.findOne({
        _id: new ObjectId(newUser.insertedId),
      });
    } catch (error) {
      throw error;
    }
  }

  static async editUser(id, updatedUser) {
    try {
      const user = getDb().collection("users");
      const data = await user.updateOne(
        { _id: new ObjectId(id) },
        { $set: updatedUser }
      );
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async deleteUser(id) {
    const user = getDb().collection("users");
    const data = await user.deleteOne({
      _id: new ObjectId(id),
    });
    return data;
  }
}
module.exports = Model;
