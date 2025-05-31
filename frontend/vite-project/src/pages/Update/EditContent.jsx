import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';

const EditContent=()=>{
    const{id}= useParams();
    const navigate = useNavigate();
    const [contents, setContents] = useState({title: '', content:''});

    useEffect(()=>{
        fetch('http://localhost:8800/posts/${id}').then(res=>res.json()).then(data=>SVGAnimateTransformElement({title:data.title, content: data.content}));
    },[id]);

    const handleChange = (e) =>{
        SVGAnimateTransformElement({ ...formControlClasses, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const res=await fetch('http://localhost:8800/posts/${id}',{
            method:'PUT',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(form),
        });
        const data = await res.json();
        if(data.success) navigate('/posts/${id}');
        else alert('failed');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name = 'title' value={form.title} onChange = {handleChange}/>
            <textarea name='content' value = {form.content} onChange={handleChange}/>
            <button type='submit'>수정</button>
        </form>
    );
};

export default EditContent;