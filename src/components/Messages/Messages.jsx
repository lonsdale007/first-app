import m from './Messages.module.css';
import Dialogs from './Dialogs/Dialogs';
import Chat from "./Chat/Chat";

const Messages = (props) => {
    return (
            <div className={m.messages}>
                <Dialogs dialogs={props.dialogs}/>
                <Chat messages={props.messages}/>
            </div>
    )
}

export default Messages;