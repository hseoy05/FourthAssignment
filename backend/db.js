import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const client = new MongoClient(process.env.MONGO_URL);
let db;

const connect = async () => {
  try {
    await client.connect();
    db = client.db('board');
    console.log('✅ DB 연결 성공');
  } catch (err) {
    console.error('❌ DB 연결 실패:', err);
  }
};

const getDB = () => {
  if (!db) throw new Error('DB가 초기화되지 않았습니다.');
  return db;
};

export { connect, getDB };
