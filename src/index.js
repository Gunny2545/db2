require('dotenv').config({path: './config.env'});
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const cors = require('cors');

const productRouter = require('./routes/product.route');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

require("./db.js")(app);

app.get("/", (req, res) => {
  res.send("Wellcome ok");
});

app.get("/about", (req, res) => {
  res.send("About us");
});

app.get("/contact", (req, res) => {
    res.send("Contact us");
  });

app.use("/product", productRouter);


app.listen(port, () => {
  console.log("Starting node.js at port " + port);
});