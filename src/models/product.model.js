const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    // latop
    brand: { type: String, required: true },
    model: { type: String },
    display: { type: String },
    processor: { type: String },
    graphics: { type: String },
    memory: { type: String },
    storage: { type: String },
    weight: { type: String },
    price: Number,
    unit_in_stock: Number,

    // reviews
    reviews:[
        {star: {type: Number, required: true }, comment: String}
    ],
},{ timestamps: true});

module.exports = mongoose.model("Product", productSchema);