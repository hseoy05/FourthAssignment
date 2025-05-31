import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const PostDetail=()=>{
    const {id} = useParams();
    const [post, setPost] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:8800/posts/${id}').then(res=>res.json()).then(setPost);
    },[id]);

    if(!post) return <p>loding ...</p>
    
    return(
        <div>
            <h2>{post.title}</h2>
            <p>작성자: {post.userName}</p>
            <p>{post.content}</p>
        </div>
    )
}
export default PostDetail;