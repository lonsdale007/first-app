import styles from './NavElement.module.css';
import {NavLink} from "react-router-dom";

const NavElement = (props) => {
    return (
        <NavLink className={styles.element} to={props.link}>
            <img src={props.pic} alt={'nav_icon'}/>
            <span className={styles.name}>{props.name}</span>
        </NavLink>
    )
}

export default NavElement;