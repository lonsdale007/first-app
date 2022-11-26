import ne from './NavElement.module.css';
import {NavLink} from "react-router-dom";

const NavElement = (props) => {
    return (
        <NavLink className={ne.element} to={props.link}>
            <img src={props.pic} alt={''}/>
            <span className={ne.name}>{props.name}</span>
        </NavLink>
    )
}

export default NavElement;