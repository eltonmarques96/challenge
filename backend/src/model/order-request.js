const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const orderRequest = new Schema ({
    subject: String,
    body: String
});

module.exports = mongoose.model('orderrequest', orderRequest)