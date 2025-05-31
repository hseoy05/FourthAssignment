import express from 'express';
import {getDB} from '../db.js';

const router = express.Router();

router.post("/", async (req, res)=>{
    const db = getDB();
    const {userId, userPassword} = req.body;
    try{
        await db.collection('users').insertOne({userId, userPassword});
        res.status(201).json({success:true});
    }catch(err){
        res.status(500).json({message: 'get users data failed'});
    }
});

export default router;