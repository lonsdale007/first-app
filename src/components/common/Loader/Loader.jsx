import styles from './Loader.module.css';
import loader from '../../../assets/images/loader.svg';

const Loader = (props) => {
    return (
        <div className={styles.loader}>
            <img src={loader} alt={'loader'}/>
        </div>
    )
}

export default Loader;