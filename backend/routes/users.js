import express from 'express';
import {getDB} from '../db.js';

const router = express.Router();

router.post("/login", async (req, res)=>{
    const db = getDB();
    const {userId, userPassword} = req.body;

    try{
        await db.collection('users').findOne({userId, userPassword});

        if(user){
            return res.status(200).json({success:true, userName: user.userId});
        } else {
            return res.status(401).json({success:false, message: 'Invalid id, password'});
        }
    }catch(err){
        console.error('로그인인 error!:', err);
        res.status(500).json({success: false, message: 'get users data failed'});
    }
});

router.post("/join", async (req,res)=>{
    const db = getDB();
    const {userId, userPassword} = req.body;

    try {
        await db.collection('users').insertOne({userId, userPassword});
        res.status(201).json({success:true});
    } catch (err){
        console.error('join error: ',err);
        res.status(500).json({success:false, message: 'join failed'})
    }
});

export default router;