import db from './DialogsBody.module.css';
import Dialog from "./Dialog/Dialog";

const DialogsBody = (props) => {

    let dialogsElements = props.dialogs.map( d => <Dialog id={d.id} name={d.name} avatar={d.avatar} text={d.text}/> );

    return (
        <div className={db.dialogs}>
            {dialogsElements}
        </div>
    )
}

export default DialogsBody;