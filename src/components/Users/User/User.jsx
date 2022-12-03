import u from './User.module.css';
import {NavLink} from "react-router-dom";
import Avatar from "../../common/Avatar/Avatar";

const User = (props) => {
    return (
        <div className={u.user}>
            <NavLink to={'/profile/' + props.userID} className={u.avatar}>
                <Avatar avatar={props.avatar} size={'large'}/>
            </NavLink>
            <NavLink to={'/profile/' + props.userID} className={u.name}>{props.name}</NavLink>
            <span className={u.status}>{props.status}</span>
            {props.followed
                    ? <button onClick={() => {props.unfollow(props.userID)}} className={u.follow_btn}>Unfollow</button>
                    : <button onClick={() => {props.follow(props.userID)}} className={u.follow_btn}>Follow</button>}
            <div className={u.location}>
                <span className={u.country}>{props.location.country}</span>
                <span className={u.city}>{props.location.city}</span>
            </div>
        </div>
    )
}

export default User;