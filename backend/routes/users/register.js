import express from 'express';
import {getDB} from '../../db.js';

const router = express.Router();

router.post("/", async (req,res)=>{
    const db = getDB();
    const {userId, userPassword, userName} = req.body;

    try {
        await db.collection('users').insertOne({userId, userPassword, userName});
        res.status(201).json({success:true});
    } catch (err){
        console.error('join error: ',err);
        res.status(500).json({success:false, message: 'join failed'})
    }
});

export default router;