import express from 'express';
import { getDB } from '../db.js';
import { ObjectId } from 'mongodb';

const router = express.Router();

router.get('/:postId', async (req, res) => {
  try {
    const db = getDB();
    const comments = await db.collection('comment').find({
      postId: new ObjectId(req.params.postId),
    }).sort({ createdAt: -1 }).toArray();

    res.status(200).json(comments);
  } catch (err) {
    console.error('댓글 불러오기 에러:', err);
    res.status(500).json({ error: 'comment error!' });
  }
});

router.post("/", async (req, res) => {
  try {
    const db = getDB();
    const { postId, userId, content } = req.body;

    if (!postId || !userId || !content) {
      return res.status(400).json({ error: "모든 필드를 입력해주세요" });
    }

    const newComment = {
      postId: new ObjectId(postId),
      userId,
      content,
      createdAt: new Date(),
    };

    const result = await db.collection('comment').insertOne(newComment);
    res.status(200).json({ _id: result.insertedId, ...newComment });
  } catch (err) {
    console.error("댓글 저장 실패:", err);
    res.status(500).json({ error: "서버 에러" });
  }
});

export default router;
