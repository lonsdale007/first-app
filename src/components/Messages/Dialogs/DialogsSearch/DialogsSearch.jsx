import sb from './DialogsSearch.module.css';
import search_icon from '../../../../img/search.svg';


const DialogsSearch = (props) => {
    return (
        <div className={sb.search_block}>
            <img src={search_icon} alt={''}/>
            <input className={sb.search_area} placeholder={'Search'} type={'text'}/>
        </div>
    )
}

export default DialogsSearch;