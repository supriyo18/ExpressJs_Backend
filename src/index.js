import connectDB from "./db/index.js";
///require('dotenv').config()

import dotenv from "dotenv"

dotenv.config({
    path: './env'
})

connectDB()
/*
import express from "express"
const app = express()
    ; (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on("error", (error) => {
                console.log("Err ", error)
                throw error
            })

            app.listen(process.env.MONGODB_URI, () => {
                console.log("Connected at `${process.env.MONGODB_URI}`");
            })
        } catch (error) {
            console.log("Error", error)
            throw error
        }
    })()

    */