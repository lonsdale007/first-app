import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/messagesReducer";
import {connect} from "react-redux";
import ChatInput from "./ChatInput";

const mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        },
    }
}

const ChatInputContainer = connect(mapStateToProps, mapDispatchToProps)(ChatInput)

export default ChatInputContainer;