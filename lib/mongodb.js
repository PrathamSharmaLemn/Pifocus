import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URL; // Your MongoDB URI from environment variables
const options = {};

let client;
let clientPromise;

if (!process.env.MONGO_URL) {
  throw new Error('Please define the MONGODB_URI environment variable in .env.local');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
