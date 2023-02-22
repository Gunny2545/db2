const Contact = require('../models/contact.model');

exports.getContacts = (req, res)=>{
    Contact.find().exec((err, result) => {
        res.status(200).json({
            msg: "Search OK",
            data: result
        });
     });
};

exports.getContactById = (req, res)=>{
    Contact.findById(req.params.id).exec((err, result) => {
        res.status(200).json({
            msg: "Search OK",
            data: result
        });
     });
};

exports.createContact = async (req, res) =>{
    try {
    let contact = new Contact({
        cname: req.body.cname,
        cphone_number: req.body.cphone_number,
        cemail: req.body.cemail,
        cmessage: req.body.cmessage
    });
    let createContact = await contact.save();
    res.status(200).json({
        msg: "Add a contact complete.",
        data: createContact
    });
    } catch (error) {
    console.log(error);
    res.status(500).json({
        msg: error
    });    
    }
};

exports.updateContact = (req, res) =>{
    let contact = {
        cname: req.body.cname,
        cphone_number: req.body.cphone_number,
        cemail: req.body.cemail,
        cmessage: req.body.cmessage
    };
    Contact.findByIdAndUpdate(req.params.id, contact)
        .exec((err, result) => {
            Contact.findById(req.params.id)
                .exec((err, result) => {
                    res.status(200).json({
                        msg: "OK",
                        data: result
                    });
                });
        });
};

exports.addContactReply = async (req, res) => {
    let replyData = {
        $push: {
            reply: {
                comment: req.body.comment
            }
        }
    };
    Contact.findByIdAndUpdate(req.params.id, replyData)  //ระบุทั้ง id ที่ต้องการแก้ และข้อมูลใหม่
        .exec((err, result) => {
            // findById อีกครั้งเพื่อเอา data ใหม่
            Contact.findById(req.params.id)
                .exec((err, result) => {
                    res.status(200).json({
                        msg: "OK",
                        data: result
                    });
                });
        });
};

exports.deleteContactById = async (req, res) => {
    Contact.findByIdAndDelete(req.params.id)
        .exec((err, result) => {
            res.status(200).json({
                msg: "Delete OK"
        });
     });
};

exports.getContactsByName = async (req, res) => {
    Contact.find({
        cname: new RegExp(req.params.cname) // Change name to cname
    })
    .exec((err, result) => {
        res.status(200).json({
            msg: "Search OK",
            data: result
        });
    });
};

