import avaElya from "../img/Elya.jpg";
import avaDima from "../img/Dima.jpg";
import avaVanya from "../img/Vanya.jpg";
import avaEgor from "../img/Egor.jpg";

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initState = {
    dialogs: [
        { id: 1, name: 'Elvira Shurygina', avatar: avaElya, text: 'hi, im fine, wo ba u?' },
        { id: 2, name: 'Dmitry Chernikov', avatar: avaDima, text: 'hello from KZ' },
        { id: 3, name: 'Ivan Bogomolov', avatar: avaVanya, text: 'read about js on mdn' },
        { id: 4, name: 'Egor Emelyanov', avatar: avaEgor, text: 'go cs' },
    ],
    messages: [
        { id_dialog: 1, id_message: 1, date: '11:18', text: 'Hello', isIncoming: true },
        { id_dialog: 1, id_message: 2, date: '11:30', text: 'How are you?', isIncoming: true },
        { id_dialog: 1, id_message: 3, date: '11:31', text: 'hat r u doin?', isIncoming: true },
        { id_dialog: 1, id_message: 4, date: '11:36', text: 'hi, im fine, wo ba u?', isIncoming: false },
        { id_dialog: 2, id_message: 1, date: '12:25', text: 'hello from KZ', isIncoming: true },
        { id_dialog: 3, id_message: 1, date: '16:13', text: 'read about js on mdn', isIncoming: true },
        { id_dialog: 4, id_message: 1, date: '15:14', text: 'go cs', isIncoming: true },
    ],
    newMessageText: '',
}

const messagesReducer = (state = initState, action) => {

    let currentDateTime = new Date();
    let currentHours = currentDateTime.getHours();
    let currentMinutes = currentDateTime.getMinutes();
    let currentTime = `${currentHours<10?'0'+currentHours:currentHours}:${currentMinutes<10?'0'+currentMinutes:currentMinutes}`;

    switch (action.type) {
        case(SEND_MESSAGE):
            let newMessage = {
                id_dialog: 1,
                id_message: 5,
                text: state.newMessageText,
                date: currentTime,
                isIncoming: false,
            }

            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage],
            };
        case(UPDATE_NEW_MESSAGE_TEXT):
            return {
                ...state,
                newMessageText: action.messageText,
            };
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, messageText: text});

export default messagesReducer;