import React, {useState} from 'react';
import { sendMsgToOpenAI } from './openai';
import './css/Page.css';
import utec from './assets/utec-logo1.png';
import userIcon from './assets/luis.png';
import sendBtn from './assets/send.svg';

function Page({ description, backgroundColor}) {
    const [input, setInput] = useState('');
    const [message, setMessage] = useState([
        { text: description, isBot: true }
    ]);
   

    const handleSend = async () => {
        const userInput = input;
        setMessage(prevMessage => [
            ...prevMessage,
            { text: userInput, isBot: false }
        ]);
        setInput('');

        const res = await sendMsgToOpenAI(userInput);

        setMessage(prevMessage => [
            ...prevMessage,
            { text: res, isBot: true }
        ]);
        console.log(res);
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <div className="Box" style={{ backgroundColor }}>


            <img className="utecLogo" src={utec} alt="" />
            <div className="generalChats">
                {message.map((message, i) =>
                    <div key={i} className={message.isBot ? "chat generalbot" : "generalChat"}>
                        <img className="generalChatImg" src={message.isBot ? utec : userIcon} alt="" />
                        <p className="txt">{message.text}</p>
                    </div>
                )}
            </div>

            <div className="generalChatFooter">
                <div className="generalInp">
                    <input type="text" placeholder='Send a message...' value={input} onChange={handleChange} />
                    <button className="generalsend" onClick={handleSend}><img src={sendBtn} alt="Send" /></button>
                </div>
            </div>
        </div>
    );
}


export default Page