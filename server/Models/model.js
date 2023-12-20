const { getDb } = require("../config/mongo");
const { ObjectId } = require("mongodb");
const bcrypt = require("bcryptjs");

class Model {
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

  static async addUser(user) {
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
