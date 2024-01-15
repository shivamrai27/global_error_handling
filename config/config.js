import mongoose from 'mongoose';

export const connectDb = async () => {
    try {
        const res = await mongoose.connect('mongodb+srv://admin:admin@cluster0.hlqkkvi.mongodb.net/?retryWrites=true&w=majority');
        //mongodb://127.0.0.1:27017/e-commerce
        console.log("Connected to MongoDB")

    } catch (error) {
        console.log(error.message);
    }
} 