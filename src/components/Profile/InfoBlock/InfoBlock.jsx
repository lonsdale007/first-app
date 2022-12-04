import styles from './InfoBlock.module.css';
import Avatar from "../../common/Avatar/Avatar";
import user_avatar from '../../../assets/images/user_avatar.svg'

const InfoBlock = () => {
    return (
        <div className={styles.block}>
            <div className={styles.avatar}>
                <Avatar avatar={user_avatar} size={'profile'}/>
                <button className={styles.update_avatar}>Update</button>
            </div>
            <div className={styles.description}>
                <div className={styles.name}>Danila Artemov</div>
                <br/>
                <div>Date of birth:</div>
                <div>City:</div>
                <div>Education:</div>
                <div>Web site:</div>
            </div>
        </div>
    )
}

export default InfoBlock;