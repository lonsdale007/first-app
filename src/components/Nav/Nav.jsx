import n from './Nav.module.css';
import NavElement from "./NavElement/NavElement";

const Nav = () => {
    return (
        <nav className={n.nav_bar}>
            <NavElement pic={require('../../img/profile.png')} name={'Profile'} link={'/profile'}/>
            <NavElement pic={require('../../img/messages.png')} name={'Messages'} link={'/messages'}/>
            <NavElement pic={require('../../img/news.png')} name={'News'} link={'/news'}/>
            <NavElement pic={require('../../img/music.png')} name={'Music'} link={'/music'}/>
            <br/>
            <NavElement pic={require('../../img/settings.png')} name={'Settings'} link={'/settings'}/>
        </nav>
    )
}

export default Nav;