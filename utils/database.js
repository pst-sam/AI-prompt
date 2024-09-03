import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
    mongoose.set('strictQuery', true)


    if (isConnected) {
        console.log('Already Connected to MongoDB')
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'share-prompt',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true
        console.log('Connected to MongoDB ')
    } catch (error) {
        console.log(error)
    }
}

