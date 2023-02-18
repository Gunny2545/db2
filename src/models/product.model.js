const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    // mouse
    mousebrand: { type: String, required: true },
    mousemodel: { type: String },
    wired_wireless: { type: String },
    sensor: { type: String },
    resolution: { type: String },
    mouseprice: Number,
    mouseunit_in_stock: Number,

    // reviews
    reviews:[
        {star: {type: Number, required: true }, comment: String}
    ],
},{ timestamps: true});

module.exports = mongoose.model("Product", productSchema);