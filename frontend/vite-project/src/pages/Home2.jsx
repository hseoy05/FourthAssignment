import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Home2 = () =>{
    const navigate = useNavigate();
    return(
        <>
            <div>
                <h2>환영합니다!</h2>
                <button onClick={() => navigate('/read/list')}>게시글 보러 가기</button>
                <br></br>
                <button onClick={() => navigate('/join')}>회원가입하러 가기</button>
            </div>
        </>
    )
}

export default Home2