import styles from './UsersSearch.module.css';
import search_icon from '../../../../assets/images/search.svg';

const UsersSearch = (props) => {

    return (
        <div className={styles.search}>
            <input className={styles.input} type={'search'} placeholder={'Search users'}/>
            <button>
                <img src={search_icon} alt={'search'}/>
            </button>
        </div>
    )
}

export default UsersSearch;