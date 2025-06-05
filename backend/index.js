import dotenv from 'dotenv'; 
import express from 'express';
import commentRouter from './routes/comments.js';
import cors from 'cors';
import { connect } from './db.js';
import postRouter from './routes/posts.js';
import loginRouter from './routes/users/login.js';
import registerRouter from './routes/users/register.js';

const app = express();
dotenv.config();  
app.use(cors());
app.use(express.json());

app.use('/posts', postRouter);
app.use('/comments', commentRouter);
app.use('/users/login', loginRouter);
app.use('/users/register', registerRouter);

const startServer = async () =>{
  await connect();
  app.listen(8800,()=>{
    console.log('Server running on http://localhost:8800');
  });
}

startServer();
