import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../components/Post/PostList.css';

const List = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const nowUserId = localStorage.getItem("userId");

  useEffect(() => {
    fetch('http://localhost:8800/posts')
      .then(res => res.json())
      .then(setPosts)
      .catch(err => {
        console.error('게시글 불러오기 실패:', err);
      });
  }, []);

  return (
    <div className="list-container">
      <h2>Content List</h2>

      {posts.length === 0 ? (
        <>
          <p>게시글이 없습니다.</p>
          <button className="back-button" onClick={() => navigate("/home")}>이전 페이지로 가기</button>
          <button className="fixed-home-button" onClick={() => navigate("/home")}>
            홈으로 가기
          </button>
        </>
      ) : (
        posts.map((post) => (
          <div key={post._id} className="post-card" style={{ border: '1px solid #ccc', marginBottom: '20px', padding: '10px' }}>
            <div
              onClick={() => navigate(`/posts/${post._id}`)}
              style={{ cursor: 'pointer' }}
            >
              <h3>
                {post.isPrivate && '🔒 '}
                {post.isPrivate && post.userId !== nowUserId ? '...' : post.title}
              </h3>
              <h5>{post.isPrivate && post.userId !== nowUserId ? '...' : post.content}</h5>
              <p>
                <small>작성자: {post.userName}</small><br />
                <small>{post.createdAt && (new Date(post.createdAt).toLocaleString())}</small>
              </p>
            </div>
            <div className="button-group">
              <button className="button-outline" onClick={(e) => {
                e.stopPropagation();
                if (nowUserId !== post.userId) {
                  alert('수정 권한 없음');
                  return;
                }
                navigate(`/posts/${post._id}/edit`);
              }}>
                게시글 수정하기
              </button>
              <button className="button-outline"
              onClick={()=>{
                if(nowUserId !== post.userId){
                  alert('삭제 권한 없음');
                  return;
                }
                navigate(`/posts/${post._id}/delete`);
              }}>
                게시글 삭제하기
              </button>
              <br />
              <p>
                <button className="fixed-home-button" onClick={() => navigate("/home")}>
                  홈으로 가기
                </button>
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default List;
