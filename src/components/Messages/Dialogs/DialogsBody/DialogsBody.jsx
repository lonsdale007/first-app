import db from './DialogsBody.module.css';
import Dialog from "./Dialog/Dialog";

const DialogsBody = (props) => {

    let dialogsElements = props.dialogs.map( d => <Dialog key={d.dialog_id} id={d.dialog_id} name={d.name} avatar={d.avatar} text={d.text}/> );

    return (
        <div className={db.dialogs}>
            {dialogsElements}
        </div>
    )
}

export default DialogsBody;