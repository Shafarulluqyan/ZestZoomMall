const Model = require("../Models/modelProduct");

class Controller {
  static async findAllProduct(req, res) {
    try {
      const products = await Model.allProduct();
      res.status(200).json(products);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  static async findProductById(req, res) {
    try {
      const { id } = req.params;
      const product = await Model.productById(id);
      res.status(200).json(product);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
module.exports = Controller;
