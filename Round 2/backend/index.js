const express = require("express")
const cors = require('cors')
const { connection } = require("./config/config")
const productsRouter = require("./routes/products.routes")
const cartRouter = require("./routes/cart.routes")
require("dotenv").config()

const app = express()
app.use(cors({ origin: "*" }))
app.use(express.json());

app.use(express.urlencoded({ extended: true }))
//Routes Importing

app.use("/product", productsRouter)

app.use("/cart", cartRouter)

app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log("Connected to Mongo Atlas");
    } catch (err) {
        console.log(err)
        console.log("Couldn't connect to Mongo Atlas");
    }
    console.log(`Server started on port ${process.env.port}`);
});