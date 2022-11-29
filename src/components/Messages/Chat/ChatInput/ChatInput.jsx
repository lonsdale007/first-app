import React from "react";
import ci from './ChatInput.module.css';
import send from '../../../../img/send.svg';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/state";

const ChatInput = (props) => {

    let onNewMessageTextChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    return (
        <div className={ci.new_message}>
            <input onChange={onNewMessageTextChange} className={ci.input} type={'text'} placeholder={'Write a message...'}/>
            <span onClick={sendMessage} className={ci.send}>
                <img src={send} alt={''}/>
            </span>
        </div>
    )
}

export default ChatInput;