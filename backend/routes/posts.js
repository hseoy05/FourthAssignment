import express from 'express';
import {getDB} from '../db.js';

const router = express.Router();

router.post('/', async (req,res)=>{
    const {title, content, userId} = req.body;
    const db = getDB();
    try{
        const result = await db.collection('post').insertOne({title, content, userId });
        res.status(201).json({success:true, postId:result.insertedId});
    } catch (err) {
        res.status(500).json({success:false, message: 'error'});
    }
});

router.get('/',async (req, res)=>{
    const db = getDB();
    try{
        const posts = await db.collection('post').find({}).toArray();
        res.json(posts);
    } catch (err) {
        res.status(500).json({message: 'error'});
    }
});