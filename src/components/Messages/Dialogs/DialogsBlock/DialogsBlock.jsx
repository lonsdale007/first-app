import db from './DialogsBlock.module.css';
import Dialog from "./Dialog/Dialog";

const DialogsBlock = (props) => {
    return (
        <div className={db.dialogs}>
            <Dialog id={'1'} name={'Elyash'} text={'hi, im fine, wo ba u?'}/>
        </div>
    )
}

export default DialogsBlock;