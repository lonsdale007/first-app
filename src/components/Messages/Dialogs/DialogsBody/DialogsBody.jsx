import db from './DialogsBody.module.css';
import Dialog from "./Dialog/Dialog";
import avaElya from '../../../../img/Elya.jpg'

const DialogsBody = (props) => {

    let dialogsData = [
        { id: 1, name: 'Elvira Shurygina', avatar: avaElya, text: 'hi, im fine, wo ba u?'}
    ]

    return (
        <div className={db.dialogs}>
            <Dialog id={dialogsData[0].id} name={dialogsData[0].name} avatar={dialogsData[0].avatar} text={dialogsData[0].text}/>
        </div>
    )
}

export default DialogsBody;