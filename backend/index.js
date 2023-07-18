const express = require("express")
const cors = require('cors')
const mongoose = require("mongoose")
const { connection } = require("./config/config")
const userRouter = require("./routes/user.routes")
const bookRouter = require("./routes/books.routes")
require("dotenv").config()

const app = express()
app.use(cors({ origin: "*" }))
app.use(express.json());

app.use(express.urlencoded({ extended: true }))
//Routes Importing

app.use("/user", userRouter)

app.use("/book", bookRouter)

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