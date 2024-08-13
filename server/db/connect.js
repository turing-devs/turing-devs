import chalk from "chalk";
import mongoose from "mongoose";

import { MONGODB_URI, DB_NAME } from "../config.js";

const URI = `${MONGODB_URI}/${DB_NAME}`;

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(URI);
        console.log(`MongoDB Connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error(
            chalk.redBright(`MongoDB Connection Error: ${error.message}`)
        );
    }
};

export default connectDB;
