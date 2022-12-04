import styles from './Profile.module.css';
import PostBlock from "./PostBlock/PostBlock";
import InfoBlock from "./InfoBlock/InfoBlock";
import ProfileCover from "./ProfileCover/ProfileCover";

const Profile = (props) => {
    return (
        <div className={styles.profile}>
            <ProfileCover/>
            <InfoBlock/>
            <PostBlock/>
        </div>
    )
}

export default Profile;