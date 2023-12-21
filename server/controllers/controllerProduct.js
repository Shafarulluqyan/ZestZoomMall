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

  static async addProduct(req, res) {
    try {
      const { name, size, colour, price, description, mainImg, images } =
        req.body;
      const product = {
        name,
        size,
        colour,
        price,
        description,
        mainImg,
        images,
      };
      const result = await Model.addProduct(product);
      res.status(201).json({ message: "Success add new product" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async editProduct(req, res) {
    try {
      const { id } = req.params;
      const { name, size, colour, price, description, mainImg, images } =
        req.body;

      const updatedProduct = {
        name,
        size,
        colour,
        price,
        description,
        mainImg,
        images,
      };

      const result = await Model.editProduct(id, updatedProduct);
      res.status(200).json({ message: "Success edit product" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async deleteProduct(req, res) {
    try {
      const { id } = req.params;
      const product = await Model.deleteProduct(id);
      res.status(200).json({ message: "Success delete product" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
module.exports = Controller;
