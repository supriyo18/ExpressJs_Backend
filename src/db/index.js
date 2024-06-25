import mongoose from "mongoose"
import { DB_NAME } from "../constant.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Mongo Db Connected  ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Mongo DB error ", error)
        process.exit(1) ///node
    }
}

export default connectDB;