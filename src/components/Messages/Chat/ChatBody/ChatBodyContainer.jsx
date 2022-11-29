import {connect} from "react-redux";
import ChatBody from "./ChatBody";


const mapStateToProps = (state) => {
    return {
        messages: state.messagesPage.messages,
    }
}

const ChatBodyContainer = connect(mapStateToProps)(ChatBody)

export default ChatBodyContainer;