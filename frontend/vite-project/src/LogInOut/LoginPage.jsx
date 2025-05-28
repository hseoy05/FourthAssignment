import {React, useState} from 'react'

const LoginPage =()=>{
    return(
        <>
        <p><h2>로그인 하기</h2></p>
        <br></br>
        <p>
            <form action="/" method="POST">
                <intput type="text" name="userId">아이디</intput>
                <input type="password" name="userId">비밀번호</input>
                <p><button type="submit">submit</button></p>
            </form>
        </p>
        </>
    )
}

export default LoginPage;