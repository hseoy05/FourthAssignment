import {React, useState} from 'react'
import {useNavigate}from 'react-router-dom';
import '../../css/LoginPage.css';

const JoinPage =()=>{
    const navigate = useNavigate();
    const [userId, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userName, setUserName] = useState('');

    const [message, setMessage] = useState('');
    const [result, setResult] = useState(false);

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:8800/users/register", {
                method:'POST', 
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({userId,userPassword, userName})
        });
        const data = await res.json();
        
        if(data.success){
            setMessage('success!');
            setResult(true);
        }else{ setMessage('fail');
            setResult(false);
        }
    } catch (err) {
        console.error(err);
        setResult(false);
        setMessage('server error');
    }
    };

    return (
        <div className='login-container'>
            <h2>회원가입 하기</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>아이디: </label>
                    <input type="text" name="userId" value={userId} onChange={(e)=>setUserId(e.target.value)}/>
                </div>
                <div>
                    <label>비밀번호: </label>
                    <input type="password" name="userPassword" value={userPassword} onChange={(e) => setUserPassword(e.target.value)}/>
                </div>
                <div>
                    <label>이름: </label>
                    <input type="text" name="userName" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                </div>
                <button type="submit">submit</button>
                <br></br>
                <button onClick={()=>navigate("/")}>이전 페이지로</button>
            </form>
            {message && <p>{message}</p>}
            {result && (
                <button onClick={()=>navigate('/login')}>로그인 하러 가기</button>
            )}
        </div>
    );
}

export default JoinPage