import p from './Profile.module.css';
import PostBlock from "./PostBlock/PostBlock";
import InfoBlock from "./InfoBlock/InfoBlock";

function Profile() {
    return (
        <div className={p.page}>
            <div className={p.cover}>
                <img src={require('../../img/cover.jpg')} alt={'profile-cover'}/>
            </div>
            <InfoBlock/>
            <PostBlock/>
        </div>
    )
}

export default Profile;