import d from './Dialogs.module.css'
import SearchBlock from "./SearchBlock/SearchBlock";


const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <SearchBlock/>
        </div>
    )
}

export default Dialogs;