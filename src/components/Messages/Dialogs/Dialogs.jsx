import d from './Dialogs.module.css'
import DialogsSearch from "./DialogsSearch/DialogsSearch";
import DialogsBodyContainer from "./DialogsBody/DialogsBodyContainer";


const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <DialogsSearch/>
            <DialogsBodyContainer/>
        </div>
    )
}

export default Dialogs;