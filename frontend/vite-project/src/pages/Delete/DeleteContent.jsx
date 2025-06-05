import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DeleteContent = () => {
    const nowUserId = localStorage.getItem('userId');
    const { id } = useParams();
    const navigate = useNavigate();

    const hasDeletedRef = useRef(false);
    useEffect(() => {
        if (hasDeletedRef.current) return;
        hasDeletedRef.current = true;

        const deletePost = async () => {
            try {
                const res = await axios.delete(`http://localhost:8800/posts/${id}`, {
                    data: { userId: nowUserId },
                });

                if (res.status === 200 && res.data?.success) {
                    alert('delete success!');
                    navigate('/read/list');
                } else {
                    throw new Error(res.data?.message || 'delete fail');
                }
            } catch (error) {
                console.error(error);
                alert('delete fail!');
            }
        };

        deletePost();
    }, [id, nowUserId, navigate]);

    return <div><h2>loading . . .</h2></div>;
};

export default DeleteContent;
