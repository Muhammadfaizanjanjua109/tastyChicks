// mongodb.js

import { MongoClient } from 'mongodb';

let cachedClient = null;

export async function connectToMongoDB() {
  if (cachedClient) {
    return cachedClient;
  }

  const uri = process.env.MONGODB_URI;

  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    cachedClient = client;
    return client;
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }
}

export async function closeMongoDB() {
  if (cachedClient) {
    await cachedClient.close();
    cachedClient = null;
  }
}
