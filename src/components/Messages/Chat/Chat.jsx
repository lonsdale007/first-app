import ch from './Chat.module.css';
import ChatHeader from "./ChatHeader/ChatHeader";
import avaElya from '../../../img/Elya.jpg';
import ChatBodyContainer from "./ChatBody/ChatBodyContainer";
import ChatInputContainer from "./ChatInput/ChatInputContainer";

const Chat = (props) => {
    return (
        <div className={ch.chat}>
            <ChatHeader name={'Elvira Shurygina'} avatar={avaElya}/>
            <ChatBodyContainer/>
            <ChatInputContainer/>
        </div>
    )
}

export default Chat;