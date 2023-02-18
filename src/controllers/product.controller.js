const Product = require('../models/product.model');
exports.getProducts = (req, res)=>{
    Product.find().exec((err, result) => {
        res.status(200).json({
            msg: "Search OK",
            data: result
        });
     });
};

exports.getProductById = (req, res)=>{
    Product.findById(req.params.id).exec((err, result) => {
        res.status(200).json({
            msg: "Search OK",
            data: result
        });
     });
};

exports.createProduct = async (req, res) =>{
    try {
    let product = new Product({
    // latop
        brand: req.body.brand,
        model: req.body.model,
        display: req.body.display,
        processor: req.body.processor,
        graphics: req.body.graphics,
        memory: req.body.memory,
        storage: req.body.storage,
        weight: req.body.weight,
        price: req.body.price,
        unit_in_stock: req.body.unit_in_stock,

    });
    let createProduct = await product.save();
    res.status(200).json({
        msg: "Add a product complete.",
        data: createProduct
    });
    } catch (error) {
    console.log(error);
    res.status(500).json({
        msg: error
    });    
    }
};

exports.updateProduct = (req, res) =>{
    let product = {  //ข้อมูลใหม่
        // latop
        brand: req.body.brand,
        model: req.body.model,
        display: req.body.display,
        processor: req.body.processor,
        graphics: req.body.graphics,
        memory: req.body.memory,
        storage: req.body.storage,
        weight: req.body.weight,
        price: req.body.price,
        unit_in_stock: req.body.unit_in_stock,
    
    };
    Product.findByIdAndUpdate(req.params.id, product)  //ระบุทั้ง id ที่ต้องการแก้ และข้อมูลใหม่
        .exec((err, result) => {
            // findById อีกครั้งเพื่อเอา data ใหม่
            Product.findById(req.params.id)
                .exec((err, result) => {
                    res.status(200).json({
                        msg: "OK",
                        data: result
                    });
                });
        });
};

exports.addProductReview = async (req, res) => {
    let reviewData = {
        $push: {
            reviews: {
                star: req.body.star,
                comment: req.body.comment
            }
        }
    };
    Product.findByIdAndUpdate(req.params.id, reviewData)  //ระบุทั้ง id ที่ต้องการแก้ และข้อมูลใหม่
        .exec((err, result) => {
            // findById อีกครั้งเพื่อเอา data ใหม่
            Product.findById(req.params.id)
                .exec((err, result) => {
                    res.status(200).json({
                        msg: "OK",
                        data: result
                    });
                });
        });
};

exports.deleteProductById = async (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .exec((err, result) => {
            res.status(200).json({
                msg: "Delete OK"
        });
     });
};

exports.getProductsByName = async (req, res) => {
    Product.find({
        name: new RegExp(req.params.name)
    }) // { name: /xxxx/}
    .exec((err, result) => {
        res.status(200).json({
            msg: "Search OK",
            data: result
        });
    });
};

exports.getProductsByPrice = async (req, res) => {
    
}; 