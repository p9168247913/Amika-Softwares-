const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },  
    author:{
        type: String,
        required: true
    },
    genere:{
        type: String,
        required: true,
    },
    isbn:{
        type: String,
        required: true
    },
    releaseDate:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
    },
    userId:{
        type: String,
    }
}, {
    versionKey: false
})

const BooksModel = mongoose.model("books", bookSchema)
module.exports = BooksModel