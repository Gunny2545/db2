const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  cname: { type: String, required: true },
  cphone_number: { type: String, required: true },
  cemail: { type: String, required: true },
  cmessage: { type: String, required: true },
  reply: [{ comment: String }]
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
