import styles from './User.module.css';
import {NavLink} from "react-router-dom";
import Avatar from "../../../../common/Avatar/Avatar";
import user_avatar from '../../../../../assets/images/user_avatar.svg'

const User = (props) => {
    return (
        <div className={styles.user}>
            <NavLink to={'/profile/' + props.id} className={styles.avatar}>
                <Avatar avatar={props.avatar != null ? props.avatar : user_avatar} size={'large'}/>
            </NavLink>
            <NavLink to={'/profile/' + props.id} className={styles.name}>{props.name}</NavLink>
            <span className={styles.status}>{props.status}</span>
            {props.followed
                    ? <button onClick={() => {props.unfollow(props.id)}} className={styles.follow_btn}>Unfollow</button>
                    : <button onClick={() => {props.follow(props.id)}} className={styles.follow_btn}>Follow</button>}
            <div className={styles.location}>
                <span className={styles.country}>Russia</span>
                <span className={styles.city}>Volgograd</span>
            </div>
        </div>
    )
}

export default User;