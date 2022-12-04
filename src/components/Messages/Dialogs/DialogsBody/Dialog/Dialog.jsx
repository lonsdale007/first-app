import styles from './Dialog.module.css';
import {NavLink} from "react-router-dom";
import Avatar from "../../../../common/Avatar/Avatar";

const Dialog = (props) => {
    return (
        <NavLink exact to={'/messages/' + props.id} className={({ isActive }) => styles.dialog + (isActive ? ' ' + styles.active : '')}>
            <Avatar avatar={props.avatar} size={'medium'}/>
            <span className={styles.name}>{props.name}</span>
            <span className={styles.text}>{props.text}</span>
        </NavLink>
    )
}

export default Dialog;