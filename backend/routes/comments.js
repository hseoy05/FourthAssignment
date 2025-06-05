import express from 'express';
import Comment from '../models/Comment.js';

const router = express.Router();

router.get('/:postId', async(req, res)=>{
    try{
        const comments = await Comment.find({postId: req.params.postId}).sort({createdAt:-1});
        res.json(commetns);
    } catch (err){
        res.status(500).json({error: 'comment error!'});
    }
});

router.post('/',async (req, res) =>{
    try{
        const {postId, author, content}=req.body;
        const newComment = new Comment({postId, author, content});
        await newComment.save();
        res.status(201).json(nowComment);
    } catch (err){
        res.status(500).json({error: 'write comment failed'});
    }
});

export default router;