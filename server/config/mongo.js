const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://shafarulluqyan27:S8VIzEKHU5uTIrFe@cluster0.jcjmdlq.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

let db;
async function connect() {
  try {
    db = client.db("ZestZoomMall");
  } catch (err) {
    console.log(err);
  }
}

function getDb() {
  return db;
}

module.exports = { connect, getDb };
