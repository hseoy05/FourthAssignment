import {React, useState} from 'react'

const JoinPage =()=>{
    return(
        <>
        <p><h2>회원가입 하기</h2></p>
        <br></br>
        <p>
            <form action="/" method="POST">
                <intput type="text" name="userId">아이디</intput>
                <input type="text" name="userId">비밀번호</input>
                <input type="text" name="userName">유저 이름</input>
                <p><button type="submit">submit</button></p>
            </form>
        </p>
        </>
    )
}

export default JoinPag