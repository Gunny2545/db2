const express = require('express');
const app = express.Router();
const controller = require('../controllers/product.controller')

app.get("/", controller.getProducts);

app.get("/:id", controller.getProductById);

app.post("/", controller.createProduct);

app.put("/:id", controller.updateProduct);

app.patch("/:id", controller.addProductReview);

app.delete("/:id", controller.deleteProductById);

app.get("/brand/:brand", controller.getProductsByName);

app.get("/model/:model", controller.getProductsByName);

app.get("/display/:display", controller.getProductsByName);

app.get("/processor/:processor", controller.getProductsByName);

app.get("/graphics/:graphics", controller.getProductsByName);

app.get("/memory/:memory", controller.getProductsByName);

app.get("/storage/:storage", controller.getProductsByName);

app.get("/sensor/:sensor", controller.getProductsByName);

app.get("/resolution/:resolution", controller.getProductsByName);

app.get("/batterylife/:batterylife", controller.getProductsByName);

app.get("/weight/:weight", controller.getProductsByName);

app.get("/price/:price", controller.getProductsByPrice);

module.exports = app;