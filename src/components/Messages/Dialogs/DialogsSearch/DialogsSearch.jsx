import styles from './DialogsSearch.module.css';
import search_icon from '../../../../assets/images/search.svg';


const DialogsSearch = (props) => {
    return (
        <div className={styles.search_block}>
            <img src={search_icon} alt={''}/>
            <input className={styles.search_area} placeholder={'Search'} type={'text'}/>
        </div>
    )
}

export default DialogsSearch;