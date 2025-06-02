import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';


const DeleteContent = () => {
    const nowUserId = localStorage.getItem('userId');
    const { id } = useParams();

    useEffect(() => {
        const deletePost = async () => {
            try {
                const res = await axios.request({
                    method: 'DELETE',
                    url: `http://localhost:8800/posts/${id}`,
                    data: { userId: nowUserId },
                });
                if (res.data.success) {
                    alert('delete success!');
                    window.location.href = '/read/list';
                } else {
                    alert(res.data.message || 'delete fail');
                }
            } catch (error) {
                console.error(error);
                alert('delete fail!');
            }
        };
        deletePost();
    }, [id, nowUserId]);

    return <div><h2>loading . . .</h2></div>
};

export default DeleteContent;