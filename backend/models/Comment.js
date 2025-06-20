import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    postId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Post',
    },
    userId:{
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true,
    },
    createdAt:{
        type:Date,
        default: Date.now,
    },
});

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;