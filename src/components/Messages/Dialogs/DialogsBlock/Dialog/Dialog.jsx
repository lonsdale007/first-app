import d from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <NavLink exact to={'/messages/' + props.id} className={({ isActive }) => d.dialog + (isActive ? ' ' + d.active : '')}>
            <img className={d.avatar} src={require('../../../../../img/Elya.jpg')} alt={''}/>
            <span className={d.name}>{props.name}</span>
            <span className={d.text}>{props.text}</span>
        </NavLink>
    )
}

export default Dialog;