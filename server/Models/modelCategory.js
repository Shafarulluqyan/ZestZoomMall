const { getDb } = require("../config/mongo");
const { ObjectId } = require("mongodb");
class Model {
  static async allCategory() {
    try {
      const categories = getDb().collection("category");
      const data = await categories.find().toArray();
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  static async categoryById(id) {
    try {
      const category = getDb().collection("category");
      const data = await category.findOne({
        _id: new ObjectId(id),
      });
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async addCategory(category) {
    try {
      const categories = getDb().collection("category");
      const result = await categories.insertOne(category);
      return { id: result.insertedId, ...category };
    } catch (error) {
      throw error;
    }
  }

  static async editCategory(id, updatedCategory) {
    try {
      const category = getDb().collection("category");
      const data = await category.updateOne(
        { _id: new ObjectId(id) },
        { $set: updatedCategory }
      );
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async deleteCategory(id) {
    const category = getDb().collection("category");
    const data = await category.deleteOne({
      _id: new ObjectId(id),
    });
    return data;
  }
}
module.exports = Model;
