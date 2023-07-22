const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    image:{
        type: String,
        required: true,
    },  
    title:{
        type: String,
        required: true
    },
    actualPrice:{
        type: String,
        required: true,
    },
    offerPrice:{
        type: String,
        required: true
    }
}, {
    versionKey: false
})

const ProductsModel = mongoose.model("products", productSchema)
module.exports = ProductsModel