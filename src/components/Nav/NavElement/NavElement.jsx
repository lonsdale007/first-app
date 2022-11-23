import ne from './NavElement.module.css';

const NavElement = (props) => {
    return (
        <a className={ne.element} href={props.link}>
            <img className={ne.nav_img} src={props.pic} alt={''}/>
            <span>{props.name}</span>
        </a>
    )
}

export default NavElement;