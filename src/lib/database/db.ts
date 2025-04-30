// lib/mongoose.ts
import mongoose, { ConnectOptions, MongooseError } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

const connect = async (): Promise<void> => {
  if (mongoose.connection.readyState > 0) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    const options: ConnectOptions = {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    };

    const connection = await mongoose.connect(MONGODB_URI, options);
    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error: unknown) {
    if (error instanceof MongooseError) {
      if (error.name === 'MongoNetworkError') {
        console.error('Network error: Could not connect to MongoDB. Please check your network.');
      } else {
        console.error(`Mongoose error connecting to MongoDB: ${error.message}`);
      }
    } else if (error instanceof Error) {
      console.error(`Error connecting to MongoDB: ${error.message}`);
    } else {
      console.error('Unknown error occurred while connecting to MongoDB');
    }
    throw error;
  }
};

export default connect;