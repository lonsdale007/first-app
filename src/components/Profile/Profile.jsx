import p from './Profile.module.css';
import PostBlock from "./PostBlock/PostBlock";
import InfoBlock from "./InfoBlock/InfoBlock";
import ProfileCover from "./ProfileCover/ProfileCover";

function Profile() {
    return (
        <div className={p.page}>
            <ProfileCover/>
            <InfoBlock/>
            <PostBlock/>
        </div>
    )
}

export default Profile;