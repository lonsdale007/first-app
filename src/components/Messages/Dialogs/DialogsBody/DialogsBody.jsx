import styles from './DialogsBody.module.css';
import Dialog from "./Dialog/Dialog";

const DialogsBody = (props) => {

    let dialogsElements = props.dialogs.map( d => <Dialog key={d.dialogID} id={d.dialogID} name={d.name} avatar={d.avatar} text={d.text}/> );

    return (
        <div className={styles.dialogs}>
            {dialogsElements}
        </div>
    )
}

export default DialogsBody;