import {React, useState} from 'react'
import {useNavigate}from 'react-router-dom';

const JoinPage =()=>{
    const navigate = useNavigate();
    const [userId, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [message, setMessage] = useState('');
    const [result, setResult] = useState(false);

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:8800/users/register", {
                method:'POST', 
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({userId,userPassword})
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
        <>
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
                <button type="submit">submit</button>
            </form>
            {message && <p>{message}</p>}
            {result && (
                <button onClick={()=>navigate('/login')}>로그인 하러 가기</button>
            )}
        </>
    );
}

export default JoinPage