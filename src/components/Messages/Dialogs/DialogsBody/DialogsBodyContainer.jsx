import {connect} from "react-redux";
import DialogsBody from "./DialogsBody";

const mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
    }
}

const DialogsBodyContainer = connect(mapStateToProps)(DialogsBody)

export default DialogsBodyContainer;