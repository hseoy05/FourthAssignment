import React, {useState} from 'react'
import {userParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

const DeleteContent =()=>{
    cosnt [nowUserId, setNowUserId] = useState('');
    const {id}= useParam();
    const navigate = useNavigate();

    useEffect(()=>{
        const deletePost = async()=>{
            try{
                await axios.delete(`http://localhost:8800/posts/${id}`);
                alert('delete success!');
            } catch (error){
                console.error(error);
                alert('delete fail!');
            }
        };
        deletePost();
    },[id]);

    return (<div>loading . . .</div>)
};

export default DeleteContent;