import d from './Dialogs.module.css'
import SearchBlock from "./SearchBlock/SearchBlock";
import Dialog from "./Dialog/Dialog";


const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <SearchBlock/>
            <Dialog name={'Elyash'} text={'Hi'}/>
        </div>
    )
}

export default Dialogs;