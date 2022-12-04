import styles from './ProfileCover.module.css';
import cover from '../../../assets/images/cover.jpg';

const ProfileCover = () => {
    return (
        <div className={styles.cover}>
            <img src={cover} alt={''}/>
        </div>
    )
}

export default ProfileCover;