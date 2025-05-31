import { MongoClient } from 'mongodb';

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
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