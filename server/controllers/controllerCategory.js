const Model = require("../Models/modelCategory");

class Controller {
  static async findAllCategory(req, res) {
    try {
      const categories = await Model.allCategory();
      res.status(200).json(categories);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async findCategoryById(req, res) {
    try {
      const { id } = req.params;
      const category = await Model.categoryById(id);
      res.status(200).json(category);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async addCategory(req, res) {
    try {
      const { name } = req.body;
      const category = { name };
      const result = await Model.addCategory(category);
      res.status(201).json({ message: "Success add new category" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async editCategory(req, res) {
    try {
      const { id } = req.params;
      const { name } = req.body;

      const updatedCategory = { name };
      const result = await Model.editCategory(id, updatedCategory);
      res.status(200).json({ message: "Success edit category" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async deleteCategory(req, res) {
    try {
      const { id } = req.params;
      const category = await Model.deleteCategory(id);
      res.status(200).json({ message: "Success delete category" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
module.exports = Controller;
