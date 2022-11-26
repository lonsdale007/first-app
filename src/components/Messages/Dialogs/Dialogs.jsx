import d from './Dialogs.module.css'
import SearchBlock from "./SearchBlock/SearchBlock";
import DialogsBlock from "./DialogsBlock/DialogsBlock";


const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <SearchBlock/>
            <DialogsBlock/>
        </div>
    )
}

export default Dialogs;