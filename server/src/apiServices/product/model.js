const mongoose = require('mongoose');
const {Schema} = mongoose;

module.exports = mongoose.model('Product', new Schema({
    title: { type: String, required: true,},
    description: { type: String, required: true,},
    price: { type: Number, required: true,},
}))
