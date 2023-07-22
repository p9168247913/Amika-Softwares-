const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
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

const CartModel = mongoose.model("cart", cartSchema)
module.exports = CartModel