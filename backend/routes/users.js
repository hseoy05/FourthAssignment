const express =require("express");
const router = express.Router();
const {getDB} = require("../db.js");

router.get("/", async (req, res)=>{
    const users = await get.DB().collection("users").find().toArray();
    res.json(users);
});

module.exports = router;