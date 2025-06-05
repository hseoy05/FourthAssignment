import express from 'express';
import mongoose from 'mongoose';
import Comment from '../models/Comment.js';

const router = express.Router();

router.get('/:postId', async(req, res)=>{
    try{
        const comments = await Comment.find({
            postId: new mongoose.Types.ObjectId(req.params.postId),
        }).sort({createdAt:-1});
        res.json(comments);
    } catch (err){
        console.error('댓글 불러오기 에러:',err);
        res.status(500).json({error: 'comment error!'});
    }
});

router.post('/',async (req, res) =>{
    try{
        const {postId, author, content}=req.body;
        const newComment = new Comment({postId, author, content});
        const savedComment =await newComment.save();
        res.status(201).json(savedComment);
    } catch (err){
        res.status(500).json({error: 'write comment failed'});
    }
});

export default router;