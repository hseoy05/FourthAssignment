import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

const List = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch('http://localhost:8800/posts').then(res=>res.json()).then(setPosts);
    },[]);

    return (
        <div>
            <h2>게시글 목록</h2>
            {posts.length === 0 ? (
                <p>게시글이 없습니다.</p>
            ) : (
                posts.map(post => (
                    <div key={post._id} onClick={() => navigate(`/posts/${post._id}`)} style={{ cursor: 'pointer' }}>
                        <h3>{post.title}</h3>
                        <h5>{post.content}</h5>
                        <p><h5>작성자: {post.userName}</h5></p>
                        <button onClick={e => { navigate(`/posts/${post._id}/edit`); }}>게시글 수정하기</button>
                        <button onClick={e=>{navigate(`/posts/${postId}/delete`); }}>게시글 삭제하기</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default List;