import React from "react";
import styles from './ChatInput.module.css';
import send from '../../../../assets/images/send.svg';

const ChatInput = (props) => {

    let onNewMessageTextChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    return (
        <div className={styles.new_message}>
            <input onChange={onNewMessageTextChange} className={styles.input} type={'text'} placeholder={'Write a message...'} value={props.newMessageText}/>
            <span onClick={onSendMessageClick} className={styles.send}>
                <img src={send} alt={''}/>
            </span>
        </div>
    )
}

export default ChatInput;