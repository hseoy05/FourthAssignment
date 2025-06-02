import express from 'express';
import { getDB } from '../db.js';
import { ObjectId } from 'mongodb';

const router = express.Router();

router.post('/', async (req, res) => {
    const db = getDB();
    const { title, content, userId, isPrivate } = req.body;
    try {
        const user = await db.collection('users').findOne({ userId });
        const userName = user ? user.userName : '';

        const result = await db.collection('posts').insertOne({ title, content, userId, userName, isPrivate: !!isPrivate, createdAt: new Date() });
        res.status(201).json({ success: true, postId: result.insertedId });
    } catch (err) {
        res.status(500).json({ success: false, message: 'error' });
    }
});

router.get('/', async (req, res) => {
    const db = getDB();
    try {
        const posts = await db.collection('posts').find({}).toArray();
        res.json(posts);
    } catch (err) {
        console.error('posts 조회 에러');
        res.status(500).json({ message: 'error' });
    }
});

router.get('/:id', async (req, res) => {
    const db = getDB();
    try {
        const post = await db.collection('posts').findOne({ _id: new ObjectId(req.params.id) });
        if (post) res.json(post);
        else res.status(404).json({ message: 'do not find userId' });
    } catch {
        res.status(500).json({ message: 'error' });
    }
});

router.delete('/:id', async (req, res) => {
    const db = getDB();
    const postId = req.params.id;
    const userId = req.body.userId;
    try {
        const post = await db.collection('posts').findOne({ _id: new ObjectId(postId) });
        if (!post) return res.status(404).json({ success: false, message: 'Post not found' });
        if (post.userId.toString() !== userId.toString()) {
            return res.status(403).json({ success: false, message: 'Unauthorized' });
        }
        await db.collection('posts').deleteOne({ _id: new ObjectId(postId) });
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

router.put('/:id', async (req, res) => {
    const db = getDB();
    const { id } = req.params;
    const { title, content, userId, isPrivate } = req.body;
    if (!ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, message: '잘못된 형식' });
    }
    try {
        const result = await db.collection('posts').updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: { title, content, isPrivate: !!isPrivate, createdAt: new Date() } }
        );

        if (result.modifiedCount === 1) res.json({ success: true });
        else res.status(404).json({ success: false });
    } catch (err) {
        res.status(500).json({ success: false, message: 'update error' });
    }
});

export default router;