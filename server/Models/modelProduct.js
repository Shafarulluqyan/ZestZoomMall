// modelProduct.js

const { getDb } = require("../config/mongo");
const { ObjectId } = require("mongodb");
const { formatPrice, capitalizeFirstLetter } = require("../helpers/format");

class Model {
  // ...

  static async allProduct() {
    try {
      const products = getDb().collection("products");
      const data = await products.find().toArray();

      // Memformat harga pada setiap produk
      const formattedData = data.map((product) => ({
        ...product,
        price: formatPrice(product.price),
      }));

      return formattedData;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async productById(id) {
    try {
      const isValidObjectId = ObjectId.isValid(id);
      if (!isValidObjectId) {
        // Handle invalid ObjectId more explicitly, e.g., return null or throw an error
        return null;
      }

      const product = getDb().collection("products");
      const data = await product.findOne({
        _id: new ObjectId(id),
      });

      // Memformat harga pada produk tertentu
      if (data) {
        data.price = formatPrice(data.price);
      }

      return data;
    } catch (err) {
      console.error(err);
      throw err; // Re-throw the error if any other unexpected error occurs
    }
  }

  static async addProduct(product) {
    try {
      const { name, colour, size, ...restProduct } = product;

      // Mengonversi huruf depan dari nama dan colour menjadi huruf besar
      const capitalizedName = capitalizeFirstLetter(name);
      const capitalizedColour = capitalizeFirstLetter(colour);
      const capitalizedSize = capitalizeFirstLetter(size);

      const products = getDb().collection("products");
      const result = await products.insertOne({
        name: capitalizedName,
        colour: capitalizedColour,
        size: capitalizedSize,
        ...restProduct,
      });

      // Memformat harga pada hasil penambahan produk
      const formattedResult = {
        id: result.insertedId,
        name: capitalizedName,
        colour: capitalizedColour,
        size: capitalizedSize,
        ...restProduct,
      };
      formattedResult.price = formatPrice(formattedResult.price);

      return formattedResult;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async editProduct(id, updatedProduct) {
    try {
      const { name, colour, size, ...restUpdatedProduct } = updatedProduct;

      // Mengonversi huruf depan dari nama dan colour menjadi huruf besar
      const capitalizedName = capitalizeFirstLetter(name);
      const capitalizedColour = capitalizeFirstLetter(colour);
      const capitalizedSize = capitalizeFirstLetter(size);



      const isValidObjectId = ObjectId.isValid(id);
      if (!isValidObjectId) {
        // Handle invalid ObjectId (e.g., return an error)
        throw new Error("Invalid ObjectId");
      }

      const product = getDb().collection("products");
      const data = await product.updateOne(
        { _id: new ObjectId(id) },
        {
          $set: {
            name: capitalizedName,
            colour: capitalizedColour,
            size:capitalizedSize,
            ...restUpdatedProduct,
          },
        }
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
