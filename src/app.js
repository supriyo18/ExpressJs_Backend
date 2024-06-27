import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express()
//cors origin setup at server 
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true

}))

//accepting json 
app.use(express.json({ limit: "20kb" }))
//url encoder
app.use(express.urlencoded({
    extended: true, limit: "16kb"
}))
app.use(express.static("public"))
//cookies
app.use(cookieParser())
export { app }