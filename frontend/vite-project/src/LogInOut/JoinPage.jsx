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
        const data = await res.json();
        
        if(data.success){
            setMessage('success!');
        }else{ setMessage('fail');}
    } catch (err) {
        console.error(err);
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
        </>
    );
}

export default JoinPage