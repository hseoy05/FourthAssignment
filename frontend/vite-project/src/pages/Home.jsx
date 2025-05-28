import {React, useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const goToWriteContnet = () => {
        navigate('/create/writecontent');
    }
    const goToList = () => {
        navigate('/read/list');
    }

    return (
        <>
        <div>
            <h2>CyKor Assignment4</h2>
            <p>CRUD 게시판 만들기</p>
            <p>2025350214 사이버국방학과 홍서연</p>
        </div>
        <div>
            <p><button onClick={goToWriteContnet}>게시글 쓰기</button></p>
            <p><button onClick={goToList}>게시글 목록 보기</button></p>
        </div>
        </>
    );
}
export default Home;