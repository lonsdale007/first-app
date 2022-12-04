import styles from './Nav.module.css';
import NavElement from "./NavElement/NavElement";
import profile_icon from '../../assets/images/profile.svg';
import messages_icon from '../../assets/images/messages.svg';
import users_icon from '../../assets/images/users.svg';
import news_icon from '../../assets/images/news.svg';
import music_icon from '../../assets/images/music.svg';
import settings_icon from '../../assets/images/settings.svg';

const Nav = () => {
    return (
        <nav className={styles.nav_bar}>
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