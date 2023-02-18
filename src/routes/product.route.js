const express = require('express');
const app = express.Router();
const controller = require('../controllers/product.controller')
const auth = require('../middleware/auth')
// laptop

app.get("/", controller.getProducts);

app.get("/:id", controller.getProductById);

// auth
app.post("/", controller.createProduct);

app.put("/:id", controller.updateProduct);

// app.post("/", auth, controller.createProduct);

// app.put("/:id", auth, controller.updateProduct);

app.patch("/:id", controller.addProductReview);

// auth
app.delete("/:id", controller.deleteProductById);

// app.delete("/:id", auth, controller.deleteProductById);

app.get("/type/:type", controller.getProductsByName);

app.get("/brand/:brand", controller.getProductsByName);

app.get("/model/:model", controller.getProductsByName);

app.get("/display/:display", controller.getProductsByName);

app.get("/processor/:processor", controller.getProductsByName);

app.get("/graphics/:graphics", controller.getProductsByName);

app.get("/memory/:memory", controller.getProductsByName);

app.get("/storage/:storage", controller.getProductsByName);

app.get("/weight/:weight", controller.getProductsByName);

app.get("/price/:price", controller.getProductsByPrice);

app.get("/mousebrand/:mousebrand", controller.getProductsByName);

app.get("/mousemodel/:mousemodel", controller.getProductsByName);

app.get("/wired_wireless/:wired_wireless", controller.getProductsByName);

app.get("/sensor/:sensor", controller.getProductsByName);

app.get("/resolution/:resolution", controller.getProductsByName);

app.get("/mouseprice/:mouseprice", controller.getProductsByPrice);

module.exports = app;