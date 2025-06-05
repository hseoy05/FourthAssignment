import {React, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import '../../../components/Post/WriteContent.css';

const WriteContent = () => {
    const navigate = useNavigate();

    const [title, setTitle]=useState('');
    const [isPrivate, setIsPrivate] = useState(false);
    const [content, setContent] = useState('');
    const userId = localStorage.getItem("userId");

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const res = await fetch('http://localhost:8800/posts', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({title, content, userId: String(userId).trim(), isPrivate}),
        });
        const data = await res.json();
        if(data.success) alert('작성 완료');
        else alert("글 저장 실패");
    }

    return (
        <div className="write-container">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        <input type="checkbox" checked={isPrivate} onChange={(e) => setIsPrivate(e.target.checked)} />비밀글
                    </label>
                </div>
                <p>Title</p>
                <input name="title" value={title} type="text" onChange={(e) => setTitle(e.target.value)} />
                <p>Content</p>
                <textarea name="content" value={content} rows="15" cols="50" onChange={(e) => setContent(e.target.value)}></textarea>
                <div className="button-group">
                    <button type="submit"className="button-primary" >SAVE</button>
                <br></br>
                </div>
            </form>
            <br></br>
            <div className="button-group">
            <p><button type ="button" className="button-outline" onClick={()=>{navigate('/home')}}>Go to Home</button></p><br></br>
            <p><button type="button" className="button-outline" onClick={()=>{navigate('/read/list')}}>Go to List</button></p>
            </div>
        </div>
    ); 
};

export default WriteContent;