import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"
const connectDB = async () => {
    try {
        const connectinInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(
            `MongoDB connected!! HOST: ${connectinInstance.connection.host}`
        );
    } catch (error) {
        console.log("DATABASE CONNECTION ERROR ", error)
        process.exit(1)
    }
}

export default connectDB