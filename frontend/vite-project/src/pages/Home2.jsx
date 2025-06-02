import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/Home2.css';

const Home2 = () =>{
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        const name=localStorage.getItem('userName');
        if(name) setUserName(name);
    },[]);

    return(
        <>
            <div className="home-container">
                <h2>환영합니다!{userName&&`, ${userName}님!`}</h2>
                <button onClick={() => navigate('/read/list')}>게시글 보러 가기</button>
                <br></br>
                <button onClick={() => navigate('/create/writecontent')}>게시글 쓰러 가기</button>
                <br></br>
                <button onClick={() => navigate('/register')}>회원가입하러 가기</button>
                <br></br>
                <button onClick={()=>{localStorage.removeItem("userId"); navigate("/");}}>로그아웃 하기</button>
            </div>
        </>
    )
}

export default Home2