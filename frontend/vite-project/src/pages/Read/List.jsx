import {React, useEffect, useState} from 'react';
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
            {posts.map(post=>(
                <div key={post.id} onClick={()=>navigate('/posts/$post._id')} style={{cursor:'pointer'}}>
                    <h3>{post.title}</h3>
                    <p>작성자: {post.userName}</p>
                </div>
            ))}
        </div>
    );
};

export default List;