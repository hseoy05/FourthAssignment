import express from 'express';
import {getDB} from '../db.js';

const router = express.Router();

router.post('/', async (req,res)=>{
    const {title, content, userId} = req.body;
    const db = getDB();
    try{
        const result = await db.collection('posts').insertOne({title, content, userId });
        res.status(201).json({success:true, postId:result.insertedId});
    } catch (err) {
        res.status(500).json({success:false, message: 'error'});
    }
});

router.get('/',async (req, res)=>{
    const db = getDB();
    try{
        const posts = await db.collection('posts').find({}).toArray();
        res.json(posts);
    } catch (err) {
        console.error('posts 조회 에러');
        res.status(500).json({message: 'error'});
    }
});

router.get('/:id', async (req,res)=>{
    const db = getDB();
    try{
        const {ObjectId}= await import('mongodb');
        const post = await db.collection('posts').findOne({_id: new ObjectId(req.params.id)});
        if(post) res.json(post);
        else res.status(404).json({message: 'do not find userId'});
    } catch {
        res.status(500).json({message: 'error'});
    }
});

router.delete('/:id', async (req,res)=>{
    const db = getDB();
    const {ObjectId} = await import('mongodb');
    try{
        const result = await db.collection('posts').deleteOne({_id: new ObjectId(req.params.id)});
        if(result.deletedCount === 1 ) res.json({success:true});
        else res.status(404).json({success: false});
    } catch {
        res.status(500).json({success:false});
    }
});

router.put('/:id', async(req,res)=>{
    const db = getDB();
    const {ObjectId} = await import('mongodb');
    const {title, content} = req.body;

    try{
        const result = await db.collection('posts').updateOne(
            {_id: new ObjectId(req.params.id)},
            {$set:{title, content}}
        );

        if(result.modifiedCount === 1) res.json({success:true});
        else res.status(404).json({success: false});
    } catch(err) {
        res.status(500).json({success: false, message:'update error'});
    }
});

export default router;