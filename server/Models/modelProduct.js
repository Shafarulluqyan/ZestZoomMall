const { getDb } = require("../config/mongo");
const { ObjectId } = require("mongodb");
class Model {
  static async allProduct() {
    try {
      const products = getDb().collection("products");
      const data = await products.find().toArray();
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  static async productById(id) {
    try {
      const product = getDb().collection("products");
      const data = await product.findOne({
        _id: new ObjectId(id),
      });
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async addProduct(product) {
    try {
      const products = getDb().collection("products");
      const result = await products.insertOne(product);
      return { id: result.insertedId, ...product };
    } catch (error) {
      throw error;
    }
  }

  static async editProduct(id, updatedProduct) {
    try {
      const product = getDb().collection("products");
      const data = await product.updateOne(
        { _id: new ObjectId(id) },
        { $set: updatedProduct }
      );
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async deleteProduct(id) {
    const product = getDb().collection("products");
    const data = await product.deleteOne({
      _id: new ObjectId(id),
    });
    return data;
  }
}
module.exports = Model;
