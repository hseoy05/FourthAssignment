import {React, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const WriteContent = () => {
    const navigate = useNavigate();

    const [title, setTitle]=useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const res = await fetch('http://localhost:8800/posts', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({title, content}),
        });
        const data = await res.json();
        if(data.success) alert('작성 완료');
        else alert("글 저장 실패");
    }

    return (
        <div>
            <h2>게시글 쓰기</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <p>Title</p>
                    <input name = "title" value={title} type="text" onChange={(e)=> setTitle(e.target.value)}/>
                    <p>Content</p>
                    <textarea name = "content" value={content} rows="15" cols="50" onChange={(e)=>setContent(e.target.value)}></textarea>
                </div>
                <p><button type="submit">저장</button></p>
            </form>
            <br></br>
            <p><button onClick={()=>{navigate('/home')}}>Go to Home</button></p>
            <p><button onClick={()=>{navigate('/read/list')}}>Go to Content List</button></p>
        </div>
    ); 
};

export default WriteContent;