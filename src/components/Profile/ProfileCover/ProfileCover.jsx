import p from './ProfileCover.module.css';
import cover from '../../../img/cover.jpg';

const ProfileCover = () => {
    return (
        <div className={p.cover}>
            <img src={cover} alt={'profile-cover'}/>
        </div>
    )
}

export default ProfileCover;