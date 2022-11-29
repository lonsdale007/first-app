const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const messagesReducer = (state, action) => {

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

            state.newMessageText = '';
            state.messages.push(newMessage);
            return state;
        case(UPDATE_NEW_MESSAGE_TEXT):
            state.newMessageText = action.messageText;
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, messageText: text});

export default messagesReducer;