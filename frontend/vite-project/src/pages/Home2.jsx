import React from 'react'
import { Navigate } from 'react-router-dom'

const Home2 = () =>{
    const navigate = Navigate();
    return(
        <>
            <div>
                <button onClick={() => navigate('/read/list')}>게시글 보러 가기</button>
                <button onClick={() => navigate('/join')}>회원가입하러 가기</button>
            </div>
        </>
    )
}

export default Home2