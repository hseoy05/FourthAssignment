import React, {useEffect, useRef, useState} from 'react';
import {useParams} from 'react-router-dom';
import '../../../components/Post/PostDetail.css';

const PostDetail=()=>{
    const {id} = useParams();
    const commentInputRef =useRef();
    const [post, setPost] = useState(null);
    const [comments, setComments]=useState([]);
    const [commentInput, setCommentInput]=useState("");
    const nowUserId = localStorage.getItem("userId");

    useEffect(()=>{
        fetch(`http://localhost:8800/comments/${id}`).then(res=>res.json())
        .then(data=>setComments(data));
    },[id]);

    useEffect(()=>{
        fetch(`http://localhost:8800/posts/${id}`).then(res=>res.json()).then(setPost);
    },[id]);

    if(!post) return <p>loding ...</p>

    if(post.isPrivate && nowUserId !== post.userId){
        return (
            <><p>잘못된 접근입니다.</p><p>작성자만 열람할 수 있습니다.</p></>
        )
    }

    const handleCommentSubmit =async()=>{
        const res = await fetch('http://localhost:8800/comments',{
            method: 'Post',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify({
                postId: id,
                author: localStorage.getItem("userId"),
                content: commentInput,
            })
        });

        const newComment = await res.json();
        setComments(prev => [newComment, ...prev]);
        setCommentInput('');

        commentInputRef.current?.focus();
    };
    
    return(
        <>
        <div className="post-container">
            <h1 className="post-title">"{post.title}"</h1>
            <div className="post-content"><h4>{post.content}</h4></div>
            <br></br>
            <div className="post-writer"><h5>작성자:{post.userName}</h5></div>
            <br></br>
            <div className='comment-section'>
                <h5>💬 comment:</h5>
                <div className ="comment-input-wrapper">
                <input type="text" 
                placeholder='write comment'
                ref={commentInputRef}
                value={commentInput} onChange={(e)=> setCommentInput(e.target.value)}
                />
                <button onClick={handleCommentSubmit}
                style={{backgroundColor: 'black'}}>작성하기</button>
                </div>
                    <ul>
                        {Array.isArray(comments) && comments.map((c)=>(
                            <li key={c._id}>
                                <strong>{c.author}</strong>: {c.content}
                            </li>
                        ))}
                    </ul>
                <br></br>
            </div>
        </div>

        </>
    )
}
export default PostDetail;