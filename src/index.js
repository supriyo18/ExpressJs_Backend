import connectDB from "./db/index.js";
import { app } from "./app.js"
///require('dotenv').config()

import dotenv from "dotenv"

dotenv.config({
    path: './env'
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`server is running :${process.env.PORT}`);
        })
    })
    .catch((err) => {

        app.on("error", (error) => {
            console.log("Err ", error)
            throw error
        })
    })
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