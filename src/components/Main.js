import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Main.css';
import sendBtn from './assets/send.svg';
import fillerImg from './assets/filller.png';


const Main = () => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();


    const handleChange = (e) => {
        setInput(e.target.value);
    }


    const navigateToRoute = (route) => {
        navigate(route);
    }


    return (
       
        <div className="Main">


            <div className="topRowPrograms">
                <button className="mainbutton" onClick={() => navigateToRoute('/latamfest1')}>
                    <img src={fillerImg} alt="" />
                </button>
                <button className="subbuttonleft" onClick={() => navigateToRoute('/latamfest2')}>
                    <img src={fillerImg} alt="" />
                </button>
                <button className="subbuttonmiddle" onClick={() => navigateToRoute('/latamfest3')}>
                    <img src={fillerImg} alt="" />
                </button>
                <button className="subbuttonright" onClick={() => navigateToRoute('/latamfest4')}>
                    <img src={fillerImg} alt="" />
                </button>
            </div>


            <div className="chatFooter">
                <div className="inp">
                    <input type="text" placeholder='Send a message...' value={input} onChange={handleChange} />
                    <button className="send" ><img src={sendBtn} alt="Send" /></button>
                </div>
            </div>
        </div>
   
    );
}


export default Main;




