import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';

const EditContent=()=>{
    const {id}= useParams();
    const navigate = useNavigate();
    const [contents, setContents] = useState({title: '', content:''});

    useEffect(()=>{
        fetch(`http://localhost:8800/posts/${id}`).then(res=>res.json())
        .then((data)=>setContents({title:data.title, content: data.content}));
    },[id]);

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setContents((prev)=>({...prev, [name]: value}));
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log('🔧 handleSubmit 실행됨');
        try{
            const res=await fetch(`http://localhost:8800/posts/${id}`,{
              method:'PUT',
              headers:{'Content-Type':'application/json'},
              body: JSON.stringify(contents),
            });
            const text = await res.text();
            console.log('서버 응답:', text);

            let data;
            try{
                data = JSON.parse(text);
            } catch (parseError){
                console.error('파싱 실패', parseError);
            }
            if(data.success){
                alert('edit success!');
                navigate(`/home`);
            }
            else alert('failed');
        } catch (err){
            alert('error!');
            console.log(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <p>Title</p>
                <input name = 'title' value={contents.title} onChange = {handleChange}/>
                <p>Content</p>
                <textarea name='content' value = {contents.content} onChange={handleChange}></textarea>
            </div>
            <p><button type="submit">수정</button></p>
        </form>
    );
};

export default EditContent;