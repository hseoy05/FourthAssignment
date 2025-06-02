import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import '../../../css/PostDetail.css';

const PostDetail=()=>{
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const nowUserId = localStorage.getItem("userId");

    useEffect(()=>{
        fetch(`http://localhost:8800/posts/${id}`).then(res=>res.json()).then(setPost);
    },[id]);

    if(!post) return <p>loding ...</p>

    if(post.isPrivate && nowUserId !== post.userId){
        return (
            <><p>잘못된 접근입니다.</p><p>작성자만 열람할 수 있습니다.</p></>
        )
    }
    
    return(
        <div className="post-container">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-content"><h5>{post.content}</h5></p>
            <p className="post-writer"><h5>작성자:{post.userName}</h5></p>
        </div>
    )
}
export default PostDetail;