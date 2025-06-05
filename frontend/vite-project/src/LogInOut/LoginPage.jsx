import {React, useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import '../../components/User/LoginPage.css';

const LoginPage =()=>{
    const [userId, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const [success, setSuccess] = useState(null);

    useEffect(()=>{
        if(success === false) {alert(message)}
    }, [success, message]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!userId.trim()||!userPassword.trim()){
            alert('아이디 비밀번호를 모두 입력해주세요!');
            return;
        }
        
        try{
             const res = await fetch("http://localhost:8800/users/login", {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({userId, userPassword}),
        });
        const data = await res.json();

        if(data.success){
            localStorage.setItem("userId", data.userId);
            localStorage.setItem("userName", data.userName);
            setSuccess(true);
            navigate('/home');
        } else{
            setMessage(data.message||'login failed');
            setSuccess(false);
        }
        } catch (err){
            setMessage('server connect error!');
            setSuccess(false);
        }
    };

    return (
        <div className="login-container">
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
        </div>
    );
}

export default LoginPage;