const express = require("express")
const cartRouter = express.Router()
const cartController = require("../controller/cart.controller")

cartRouter.get("/",cartController.getProducts)

cartRouter.post("/",cartController.addProducts)

// cartRouter.put("/:id",cartController.updateProduct)

cartRouter.delete("/:id",cartController.deleteProduct)

module.exports=cartRouter