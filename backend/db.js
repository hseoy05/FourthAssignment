import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const client = new MongoClient(process.env.MONGO_URL); 
let db;

export async function connect() {
  try {
    await client.connect();
    db = client.db('board');
  } catch (err) {
    console.error('error');
  }
}

export function getDB(){
  if(!db) throw new Error('error');
  return db;
}