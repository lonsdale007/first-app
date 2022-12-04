import styles from './InfoBlock.module.css';
import Avatar from "../../common/Avatar/Avatar";
import user_avatar from '../../../assets/images/user_avatar.svg'
import Loader from "../../common/Loader/Loader";

const InfoBlock = (props) => {

    if (!props.profile) {
        return <Loader/>
    }
    return (
        <div className={styles.block}>
            <div className={styles.avatar}>
                <Avatar avatar={props.profile.photos.large != null ? props.profile.photos.large : user_avatar} size={'profile'}/>
                <button className={styles.update_avatar}>Update</button>
            </div>
            <div className={styles.description}>
                <div className={styles.name}>{props.profile.fullName}</div>
                <br/>
                <div>About me: {props.profile.aboutMe}</div>
                <div>City:</div>
                <div>Education:</div>
                <div>Web site:</div>
            </div>
        </div>
    )
}

export default InfoBlock;