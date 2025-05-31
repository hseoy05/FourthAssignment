import {React, useState} from 'react'

const JoinPage =()=>{
    return (
        <>
            <h2>로그인 하기</h2>
            <br />
            <form action="/" method="POST">
                <div>
                    <label>아이디: </label>
                    <input type="text" name="userId" />
                </div>
                <div>
                    <label>비밀번호: </label>
                    <input type="password" name="userPassword" />
                </div>
                <button type="submit">submit</button>
            </form>
        </>
    );
}

export default JoinPag