import ch from './Chat.module.css';
import ChatHeader from "./ChatHeader/ChatHeader";
import avaElya from '../../../img/Elya.jpg';
import ChatBody from "./ChatBody/ChatBody";
import ChatInput from "./ChatInput/ChatInput";

const Chat = (props) => {
    return (
        <div className={ch.chat}>
            <ChatHeader name={'Elvira Shurygina'} avatar={avaElya}/>
            <ChatBody messages={props.messages}/>
            <ChatInput dispatch={props.dispatch}/>
        </div>
    )
}

export default Chat;