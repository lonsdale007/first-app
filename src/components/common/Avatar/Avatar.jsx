import styles from './Avatar.module.css'

const Avatar = (props) => {

    let avatarSize = (size) => {
        switch (size) {
            case 'small':
                return styles.avatar_s;
            case 'medium':
                return styles.avatar_m;
            case 'large':
                return styles.avatar_l;
            case 'profile':
                return styles.avatar_profile;
            default:
                return styles.avatar_full;
        }
    };

    return (
        <img className={`${styles.avatar} ${avatarSize(props.size)}`} src={props.avatar} alt={'user_avatar'}/>
    )
}

export default Avatar;