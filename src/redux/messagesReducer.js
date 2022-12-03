import user_avatar from '../img/user_avatar.svg';

const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const initState = {
    dialogs: [
        { dialogID: 1, name: 'Elvira Shurygina', avatar: user_avatar, text: 'hi, im fine, wo ba u?' },
        { dialogID: 2, name: 'Dmitry Chernikov', avatar: user_avatar, text: 'hello from KZ' },
        { dialogID: 3, name: 'Ivan Bogomolov', avatar: user_avatar, text: 'read about js on mdn' },
        { dialogID: 4, name: 'Egor Emelyanov', avatar: user_avatar, text: 'go cs' },
    ],
    messages: [
        { messageID: 1, dialogID: 1, date: '11:18', text: 'Hello', isIncoming: true },
        { messageID: 2, dialogID: 1, date: '11:30', text: 'How are you?', isIncoming: true },
        { messageID: 3, dialogID: 1, date: '11:31', text: 'what r u doin?', isIncoming: true },
        { messageID: 4, dialogID: 1, date: '11:36', text: 'hi, im fine, wo ba u?', isIncoming: false },
        { messageID: 1, dialogID: 2, date: '12:25', text: 'hello from KZ', isIncoming: true },
        { messageID: 1, dialogID: 3, date: '16:13', text: 'read about js on mdn', isIncoming: true },
        { messageID: 1, dialogID: 4, date: '15:14', text: 'go cs', isIncoming: true },
    ],
    newMessageText: '',
}

const messagesReducer = (state = initState, action) => {

    let currentDateTime = new Date();
    let currentHours = currentDateTime.getHours();
    let currentMinutes = currentDateTime.getMinutes();
    let currentTime = `${currentHours<10?'0'+currentHours:currentHours}:${currentMinutes<10?'0'+currentMinutes:currentMinutes}`;

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                messageID: 5,
                dialogID: 1,
                text: state.newMessageText,
                date: currentTime,
                isIncoming: false,
            }

            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage],
            };
        case UPDATE_NEW_MESSAGE_TEXT:
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