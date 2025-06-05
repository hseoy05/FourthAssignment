import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/Home2.css';

const Home2 = () =>{
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        const name=localStorage.getItem('userName');
        if(name) setUserName(name);
    },[]);

    return(
        <>
            <div className="home-container">
                <h2>환영합니다!{userName&&`, ${userName}님!`}</h2>
                <button onClick={() => navigate('/read/list')}>Read Content List</button>
                <br></br>
                <button onClick={() => navigate('/create/writecontent')}>Wirte Content</button>
                <br></br>
                <br></br>
                <button onClick={()=>{localStorage.removeItem("userId"); navigate("/");}}>Log out</button>
            </div>
        </>
    )
}

export default Home2