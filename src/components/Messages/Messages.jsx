import m from './Messages.module.css';
import Dialogs from './Dialogs/Dialogs';
import Chat from "./Chat/Chat";
import {Route, Routes} from "react-router-dom";
import NotSelectedDialog from "./NotSelectedDialog/NotSelectedDialog";

const Messages = (props) => {
    return (
            <div className={m.messages}>
                <Dialogs/>
                <Routes>
                    <Route path={'/'} element={<NotSelectedDialog/>}/>
                    <Route path={'/1'} element={<Chat/>}/>
                    <Route path={'/2'} element={<Chat/>}/>
                    <Route path={'/3'} element={<Chat/>}/>
                    <Route path={'/4'} element={<Chat/>}/>
                </Routes>

            </div>
    )
}

export default Messages;