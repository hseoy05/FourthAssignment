import {React, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

const List = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>게시글 목록</h2>
            <p><button onClick={() => navigate('/')}>홈으로</button></p>
            <p><button onClick={() => navigate('/create/writecontent')}>글 쓰러 가기</button></p>
        </div>
    );
};

export default List;