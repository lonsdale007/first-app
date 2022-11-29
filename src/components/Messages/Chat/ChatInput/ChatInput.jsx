import React from "react";
import ci from './ChatInput.module.css';
import send from '../../../../img/send.svg';

const ChatInput = (props) => {

    let onNewMessageTextChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    return (
        <div className={ci.new_message}>
            <input onChange={onNewMessageTextChange} className={ci.input} type={'text'} placeholder={'Write a message...'} value={props.newMessageText}/>
            <span onClick={onSendMessageClick} className={ci.send}>
                <img src={send} alt={''}/>
            </span>
        </div>
    )
}

export default ChatInput;