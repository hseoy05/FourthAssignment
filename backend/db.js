import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
let db;

export const connect = async () => {
  await client.connect();
  db = client.db("board");
};

export const getDB = () => {
  if (!db) throw new Error("DB not connected");
  return db;
};