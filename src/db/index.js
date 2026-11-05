import mongoose from 'mongoose';
import { DB_NAME } from '../constant.js';

const connectDB = async () => {
    try {
        const response = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connected: ${response.connection.host} - ${DB_NAME}`);
        return response;
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        throw error;
    }
}

export default connectDB;