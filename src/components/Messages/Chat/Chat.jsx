import ch from './Chat.module.css';
import ChatHeader from "./ChatHeader/ChatHeader";
import avatar from '../../../img/Elya.jpg';
import ChatBody from "./ChatBody/ChatBody";
import ChatInput from "./ChatInput/ChatInput";

const Chat = (props) => {
    return (
        <div className={ch.chat}>
            <ChatHeader name={'Elvira Shurygina'} avatar={avatar}/>
            <ChatBody messages={props.messages}/>
            <ChatInput/>
        </div>
    )
}

export default Chat;