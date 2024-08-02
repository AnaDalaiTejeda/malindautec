import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Main.css';
import sendBtn from './assets/send.svg';
import utec from './assets/utec-logo1.png';
import latam from './assets/latamfest.png';


const Main = () => {
    const [input] = useState('');
    const navigate = useNavigate();


    const navigateToRoute = (route) => {
        navigate(route);
    }

    return (
        
        <div className="Main">


            <img className="tinyUtecLogo" src={utec} alt="" />
            <div className="topRowPrograms">
                <button className="latamfest1" onClick={() => navigateToRoute('/latamfest1')}>
                    <img src={latam} alt="" />
                </button>
                <button className="latamfest2" onClick={() => navigateToRoute('/latamfest2')}>
                    <img src={latam} alt="" />
                </button>
                <button className="latamfest3" onClick={() => navigateToRoute('/latamfest3')}>
                    <img src={latam} alt="" />
                </button>
                <button className="latamfest4" onClick={() => navigateToRoute('/latamfest4')}>
                    <img src={latam} alt="" />
                </button>
            </div>


            <div className="chatFooter">
                <div className="inp">
                    <input type="text" placeholder='Send a message...' value={input} onClick={() => navigateToRoute('/general')} />
                    <button className="send" ><img src={sendBtn} alt="Send" /></button>
                </div>
            </div>
        </div>
    
    );
}

export default Main;