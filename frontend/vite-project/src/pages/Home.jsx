import {React, useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const goToLoginPage = () => {
        navigate('/login');
    }
    const goToJoinPage=()=>{
        navigate('/join');
    }

    return (
        <>
        <div>
            <h2>CyKor Assignment4</h2>
            <p>CRUD 게시판 만들기</p>
            <p>2025350214 사이버국방학과 홍서연</p>
        </div>
        <div>
            <p><button onClick={goToLoginPage}>로그인하러 가기</button></p>
            <p><button onClick={goToJoinPage}>회원가입하러 가기</button></p>
        </div>
        </>
    );
}
export default Home;