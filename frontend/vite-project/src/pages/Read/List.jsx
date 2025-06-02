import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const List = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8800/posts')
      .then(res => res.json())
      .then(setPosts)
      .catch(err => {
        console.error('게시글 불러오기 실패:', err);
      });
  }, []);

  return (
    <div>
      <h2>게시글 목록</h2>

      {posts.length === 0 ? (
        <p>게시글이 없습니다.</p>
      ) : (
        posts.map((post) => (
          <div key={post._id} style={{ border: '1px solid #ccc', marginBottom: '20px', padding: '10px' }}>
            <div
              onClick={() => navigate(`/posts/${post._id}`)}
              style={{ cursor: 'pointer' }}
            >
              <h3>{post.isPrivate && '🔒 '}{post.title}</h3>
              <h5>{post.content}</h5>
              <p>작성자: {post.userName}</p>
              <p><small>{post.createAt && (new Date(post.createAt).toLocaleString())}</small></p>
            </div>

            <button onClick={(e) => {e.stopPropagation(); 
                const nowUserId=localStorage.getItem("userId");
                if(nowUserId!== post.userId){
                    alert('수정 권한 없음');
                    return;
                }
                navigate(`/posts/${post._id}/edit`);}}>게시글 수정하기</button>
            <button onClick={(e)=>{ e.stopPropagation();
                fetch(`http://localhost:8800/posts/${post._id}`, {
                  method: 'DELETE',
                }).then((res) => res.json()).then((data) => {
                    if (data.success) {
                      alert('Success');
                      window.location.reload();
                    } else {
                      alert('Fail');
                    }
                  })
                  .catch((err) => { alert('Error!');});
              }}>게시글 삭제하기</button>
          </div>
        ))
      )}
    </div>
  );
};

export default List;