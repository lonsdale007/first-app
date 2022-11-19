import p from './ProfileCover.module.css';

function ProfileCover() {
    return (
        <div className={p.cover}>
            <img src={require('../../../img/cover.jpg')} alt={'profile-cover'}/>
        </div>
    )
}

export default ProfileCover;