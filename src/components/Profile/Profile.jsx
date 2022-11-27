import p from './Profile.module.css';
import PostBlock from "./PostBlock/PostBlock";
import InfoBlock from "./InfoBlock/InfoBlock";
import ProfileCover from "./ProfileCover/ProfileCover";

const Profile = (props) => {
    return (
        <div className={p.profile}>
            <ProfileCover/>
            <InfoBlock/>
            <PostBlock myPosts={props.state.myPosts}/>
        </div>
    )
}

export default Profile;