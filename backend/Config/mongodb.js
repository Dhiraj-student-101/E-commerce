// import mongoose from 'mongoose'
// const connectDB = async () => {
//     try {
//         mongoose.connection.on('connected', () => {
//             console.log('DB Connected')
//         })
//         await mongoose.connect(process.env.MONGODB_URI)
//     } catch (error) {
//         console.log('DB Connection Error:', error.message)
//     }
// }

// export default connectDB


import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
    mongoose.set('strictQuery', false);

    if (isConnected) {
        console.log("Using existing MongoDB connection");
        return;
    }

    try {
        // Connect directly using process.env.MONGODB_URI without appending extra paths
        const db = await mongoose.connect(process.env.MONGODB_URI);
        isConnected = db.connections[0].readyState;
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        throw error;
    }
};

export default connectDB;