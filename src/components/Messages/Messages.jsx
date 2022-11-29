import m from './Messages.module.css';
import Dialogs from './Dialogs/Dialogs';
import Chat from "./Chat/Chat";
import {Route, Routes} from "react-router-dom";
import NotSelectedDialog from "./NotSelectedDialog/NotSelectedDialog";

const Messages = (props) => {
    return (
            <div className={m.messages}>
                <Dialogs dialogs={props.messagesPage.dialogs}/>
                <Routes>
                    <Route path={'/'} element={<NotSelectedDialog/>}/>
                    <Route path={'/1'} element={<Chat messages={props.messagesPage.messages.filter(obj => obj.id_dialog === 1)} dispatch={props.dispatch}/>}/>
                    <Route path={'/2'} element={<Chat messages={props.messagesPage.messages.filter(obj => obj.id_dialog === 2)}/>}/>
                    <Route path={'/3'} element={<Chat messages={props.messagesPage.messages.filter(obj => obj.id_dialog === 3)}/>}/>
                    <Route path={'/4'} element={<Chat messages={props.messagesPage.messages.filter(obj => obj.id_dialog === 4)}/>}/>
                </Routes>

            </div>
    )
}

export default Messages;