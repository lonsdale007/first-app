import m from './Messages.module.css';
import Dialogs from './Dialogs/Dialogs';
import Chat from "./Chat/Chat";

const Messages = (props) => {
    return (
            <div className={m.messages}>
                <Dialogs/>
                <Chat/>
            </div>
    )
}

export default Messages;