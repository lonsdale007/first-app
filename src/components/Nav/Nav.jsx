import n from './Nav.module.css';
import NavElement from "./NavElement/NavElement";
import profile_icon from '../../img/profile.svg';
import messages_icon from '../../img/messages.svg';
import users_icon from '../../img/users.svg';
import news_icon from '../../img/news.svg';
import music_icon from '../../img/music.svg';
import settings_icon from '../../img/settings.svg';

const Nav = () => {
    return (
        <nav className={n.nav_bar}>
            <NavElement pic={profile_icon} name={'Profile'} link={'/profile'}/>
            <NavElement pic={messages_icon} name={'Messages'} link={'/messages'}/>
            <NavElement pic={users_icon} name={'Users'} link={'/users'}/>
            <NavElement pic={news_icon} name={'News'} link={'/news'}/>
            <NavElement pic={music_icon} name={'Music'} link={'/music'}/>
            <br/>
            <NavElement pic={settings_icon} name={'Settings'} link={'/settings'}/>
        </nav>
    )
}

export default Nav;