import '../css/Profile.css';
import PostBlock from "./PostBlock";
import ProfileBlock from "./ProfileBlock";

function Profile() {
    return (
        <div className={'profile-page'}>
            <div className={'profile-cover'}>
                <img src={require('../img/cover.jpg')} alt={'profile-cover'}/>
            </div>
            <ProfileBlock/>
            <PostBlock/>
        </div>
    )
}

export default Profile;