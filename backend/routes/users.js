import express from 'express';
import {getDB} from '../db.js';

const router = express.Router();

router.get("/", async (req, res)=>{
    const db = getDB();
    try{
        const users = await get.DB().collection("users").find().toArray();
        res.json(users);
    }catch(err){
        res.status(500).json({message: 'get users data failed'});
    }
});