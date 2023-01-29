const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    brand: { type: String, required: true },
    model: { type: String, required: true },
    display: { type: String, required: true },
    processor: { type: String, required: true },
    graphics: { type: String, required: true },
    memory: { type: String, required: true },
    storage: { type: String, required: true },
    weight: { type: String, required: true },
    price: Number,
    unit_in_stock: Number,
    reviews:[
        {star: {type: Number, required: true }, comment: String}
    ],
},{ timestamps: true});

module.exports = mongoose.model("Product", productSchema);