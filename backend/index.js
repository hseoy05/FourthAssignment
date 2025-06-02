import express from 'express';
import cors from 'cors';
import { connect } from './db.js';
import postRouter from './routes/posts.js';
import loginRouter from './routes/users/login.js';
import registerRouter from './routes/users/register.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/posts', postRouter);
app.use('/users/login', loginRouter);
app.use('/users/register', registerRouter);

const startServer = async () =>{
  await connect();
  app.listen(8800,()=>{
    console.log('Server running on http://localhost:8800');
  });
}

startServer();
