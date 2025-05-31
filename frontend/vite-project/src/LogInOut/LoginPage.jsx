import {React, useState} from 'react'

const LoginPage =()=>{
    const [userId, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:3000/login", {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({userId, userPassword}),
        });

        const data = await res.json();

        if(data.success){
            setMessage('Wellcome, ${data.userName}!');
        } else{
            setMessage(data.message);
        }
    };

    return (
        <>
            <h2>로그인 하기</h2>
            <form onSubmit={handleSubmit}>
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
            {message && <p>{message}</p>}
        </>
    );
}

export default LoginPage;