import cb from './ChatBody.module.css';
import Message from "./Message/Message";

const ChatBody = (props) => {

    let messagesElements = props.messages.map( m => <Message key={m.id} avatar={m.avatar} date={m.date} text={m.text} isIncoming={m.isIncoming}/> );

    return (
        <div className={cb.chat}>
            {messagesElements}
        </div>
    )
}

export default ChatBody;