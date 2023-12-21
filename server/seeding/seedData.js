async function seedData() {
  const product = require("../data/product.json");
  try {
    const collection = db.collection("products");
    const result = await collection.insertMany(product);

    console.log(`${result.insertedCount} documents inserted successfully.`);
  } finally {
    await client.close();
  }
}
