import p from './css/Profile.module.css';
import PostBlock from "./PostBlock";
import ProfileBlock from "./ProfileBlock";

function Profile() {
    return (
        <div className={p.page}>
            <div className={p.cover}>
                <img src={require('../img/cover.jpg')} alt={'profile-cover'}/>
            </div>
            <ProfileBlock/>
            <PostBlock/>
        </div>
    )
}

export default Profile;