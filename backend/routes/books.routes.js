const express = require("express")
const bookRouter = express.Router()
const booksController = require("../controller/books.controller")


bookRouter.get("/",booksController.getBooks)

bookRouter.post("/",booksController.addBooks)

bookRouter.put("/:id",booksController.updateBook)

bookRouter.delete("/:id",booksController.deleteBook)

module.exports=bookRouter