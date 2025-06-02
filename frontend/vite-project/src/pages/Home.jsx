import {React, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../../css/Home.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className ="home-container">
        <div>
            <h1>CyKor Assignment4</h1>
            <p><h3>CRUD 게시판 만들기</h3></p>
            <p><small>2025350214 사이버국방학과 홍서연</small></p>
        </div>
        <div>
            <p><button onClick={()=>navigate('/login')}>로그인하러 가기</button>
            <br></br>
            <button onClick={()=>navigate('/register')}>회원가입하러 가기</button></p>
        </div>
        </div>
    );
}
export default Home;