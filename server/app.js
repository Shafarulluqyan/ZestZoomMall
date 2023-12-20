const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const {connect} = require("./config/mongo");
const router = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (_, res) => res.json("Welcome to our server"));

app.use(router);


connect().then((db) => {
    console.log("success to connect to mongo");
  app.listen(port, () => {
    console.log("app connected to " + port);
  });
});
