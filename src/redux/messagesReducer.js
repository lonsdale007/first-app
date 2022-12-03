import user_avatar from '../img/user_avatar.svg';

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initState = {
    dialogs: [
        { dialog_id: 1, name: 'Elvira Shurygina', avatar: user_avatar, text: 'hi, im fine, wo ba u?' },
        { dialog_id: 2, name: 'Dmitry Chernikov', avatar: user_avatar, text: 'hello from KZ' },
        { dialog_id: 3, name: 'Ivan Bogomolov', avatar: user_avatar, text: 'read about js on mdn' },
        { dialog_id: 4, name: 'Egor Emelyanov', avatar: user_avatar, text: 'go cs' },
    ],
    messages: [
        { message_id: 1, dialog_id: 1, date: '11:18', text: 'Hello', isIncoming: true },
        { message_id: 2, dialog_id: 1, date: '11:30', text: 'How are you?', isIncoming: true },
        { message_id: 3, dialog_id: 1, date: '11:31', text: 'what r u doin?', isIncoming: true },
        { message_id: 4, dialog_id: 1, date: '11:36', text: 'hi, im fine, wo ba u?', isIncoming: false },
        { message_id: 1, dialog_id: 2, date: '12:25', text: 'hello from KZ', isIncoming: true },
        { message_id: 1, dialog_id: 3, date: '16:13', text: 'read about js on mdn', isIncoming: true },
        { message_id: 1, dialog_id: 4, date: '15:14', text: 'go cs', isIncoming: true },
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
                message_id: 5,
                dialog_id: 1,
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
export const updateNewMessageTextActionCreator = (messageText) => ({type: UPDATE_NEW_MESSAGE_TEXT, messageText});

export default messagesReducer;