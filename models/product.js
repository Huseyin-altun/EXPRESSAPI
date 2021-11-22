const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product= new Schema(
    {
        name: { type: String, required: true },
        stock: { type: Number, required: true },
       
    },
    
)

module.exports = mongoose.model('products', Product)