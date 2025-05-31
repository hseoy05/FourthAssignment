import {React, useState} from 'react'
import {useNavigate} from 'react-router-dom';

const LoginPage =()=>{
    const [userId, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        if(message) {alert(message)}
    }, [message]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:8800/login", {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({userId, userPassword}),
        });

        const data = await res.json();

        if(data.success){
            setMessage(`Welcome, ${data.userName}!`);
            navigate('/home');
        } else{
            setMessage(data.message||'login failed');
        }
    };

    return (
        <>
            <h2>로그인 하기</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>아이디: </label>
                    <input type="text" name="userId" value={userId}
                    onChange={(e)=>setUserId(e.target.value)} />
                </div>
                <div>
                    <label>비밀번호: </label>
                    <input type="password" name="userPassword" value={userPassword}
                    onChange={(e)=> setUserPassword(e.target.value)} />
                </div>
                <button type="submit">submit</button>
            </form>
        </>
    );
}

export default LoginPage;