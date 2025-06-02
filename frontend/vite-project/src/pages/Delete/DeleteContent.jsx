import React, {useState} from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';

const DeleteContent =()=>{
    const [nowUserId, setNowUserId] = useState('');
    const {id}= useParams();

    useEffect(()=>{
        const deletePost = async()=>{
            try{
                await axios.delete(`http://localhost:8800/posts/${id}`);
                alert('delete success!');
                window.location.href = '/read/list';
            } catch (error){
                console.error(error);
                alert('delete fail!');
            }
        };
        deletePost();
    },[id]);

    return <div><h2>loading . . .</h2></div>
};

export default DeleteContent;