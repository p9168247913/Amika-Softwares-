const express = require("express")
const productsRouter = express.Router()
const productsController = require("../controller/products.controller")

productsRouter.get("/",productsController.getProducts)

productsRouter.get("/:id",productsController.getProductsById)


productsRouter.post("/",productsController.addProducts)

productsRouter.put("/:id",productsController.updateProduct)

productsRouter.delete("/:id",productsController.deleteProduct)

module.exports=productsRouter