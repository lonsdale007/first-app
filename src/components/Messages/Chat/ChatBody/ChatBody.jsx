import styles from './ChatBody.module.css';
import Message from "./Message/Message";

const ChatBody = (props) => {

    let messagesElements = props.messages.map( m => <Message key={m.messageID} id={m.messageID} avatar={m.avatar} date={m.date} text={m.text} isIncoming={m.isIncoming}/> );

    return (
        <div className={styles.chat}>
            {messagesElements}
        </div>
    )
}

export default ChatBody;