import {React, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const WriteContent = () => {
    const navigate = useNavigate();

    const [content, setContent] = useState({
        title: '',
        body: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setContent({ ...content, [name]: value});
    };

    const handleSubmit = async(e)=>{
        e.preventDefault();
        navigate('/home');
    }

    return (
        <div>
            <h2>게시글 쓰기</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <p>Title</p>
                    <input name = "title" type="text" placeholder="title" onChange={handleChange}/>
                    <p>Content</p>
                    <textarea name = "content" placeholder="content" rows="15" cols="50" onChange={handleChange}></textarea>
                </div>
                <p><button type="submit" onClick={()=>{setContent}}>저장</button></p>
            </form>
        </div>
    ); 
};

export default WriteContent;