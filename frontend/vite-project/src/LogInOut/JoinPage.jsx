import {React, useState} from 'react'

const JoinPage =()=>{
    const [userId, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:8800/users",{ method:'POST', headers:{ 'Content-Type':'application/json'},body: JSON.stringify({userId,userPassword})
        });
        }
    }
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

export default JoinPage