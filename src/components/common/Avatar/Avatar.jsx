import a from './Avatar.module.css'

const Avatar = (props) => {

    let avatarSize = (size) => {
        switch (size) {
            case 'small':
                return a.avatar_s;
            case 'medium':
                return a.avatar_m;
            case 'large':
                return a.avatar_l;
            case 'profile':
                return a.avatar_profile;
            default:
                return a.avatar_full;
        }
    };

    return (
        <img className={`${a.avatar} ${avatarSize(props.size)}`} src={props.avatar} alt={'user_avatar'}/>
    )
}

export default Avatar;