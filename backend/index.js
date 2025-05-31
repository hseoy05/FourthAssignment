import express from 'express';
import cors from 'cors';
import { connect, getDB } from './db.js';
import postRouter from './routes/posts.js';
import userRouter from './routes/users.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/posts', postRouter);
app.use('/users', userRouter);

await connect();

app.listen(8800, () => {
  console.log('Sercer is running on: http://localhost:8800');
});