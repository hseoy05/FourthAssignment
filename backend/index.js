import express from 'express';
import cors from 'cors';
import { connect, getDB } from './db.js';
import postRouter from './routes/posts.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/posts', postRouter);

await connect();

app.post('/login', async (req, res) => {
  const { userId, userPassword } = req.body;
  const db = getDB();

  try {
    const user = await db.collection('users').findOne({ userId, userPassword });
    if (user) {
      return res.status(200).json({ success: true, userName: user.userName });
    } else {
      return res.status(401).json({ success: false, message: 'login fail' });
    }
  } catch (err) {
    return res.status(500).json({ success: false, message: 'server error' });
  }
});

app.listen(8800, () => {
  console.log('🚀 서버 실행 중: http://localhost:8800');
});
