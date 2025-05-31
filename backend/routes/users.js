import express from 'express';
import {getDB} from '../db.js';

const router = express.Router();

router.post("/ogin", async (req, res)=>{
    const db = getDB();
    const {userId, userPassword} = req.body;
    try{
        await db.collection('users').insertOne({userId, userPassword});

        if(user){
            return res.status(200).json({success:true, userName: user.userName || user.userId});
        } else {
            return res.status(401).json({success:false, message: 'Invalid'});
        }
    }catch(err){
        res.status(500).json({success: false, message: 'get users data failed'});
    }
});

export default router;