import {React, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const WriteContent = () => {

    return (
        <div>
            <h2>게시글 쓰기</h2>
            <br></br>
            <p>Title</p>
            <input type="text" placeholder="title" />
            <p>Content</p>
            <textarea placeholder="content" rows="15" cols="50"></textarea>
            <div>
                <p><button>저장</button></p>
            </div>
        </div>
    ); 
};

export default WriteContent;