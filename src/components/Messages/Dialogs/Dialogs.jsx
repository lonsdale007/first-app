import d from './Dialogs.module.css'
import DialogsSearch from "./DialogsSearch/DialogsSearch";
import DialogsBody from "./DialogsBody/DialogsBody";


const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <DialogsSearch/>
            <DialogsBody dialogs={props.dialogs}/>
        </div>
    )
}

export default Dialogs;