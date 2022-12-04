import styles from './Chat.module.css';
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatBodyContainer from "./ChatBody/ChatBodyContainer";
import ChatInputContainer from "./ChatInput/ChatInputContainer";

const Chat = (props) => {
    return (
        <div className={styles.chat}>
            <ChatHeader/>
            <ChatBodyContainer/>
            <ChatInputContainer/>
        </div>
    )
}

export default Chat;