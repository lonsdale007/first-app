import n from './css/Nav.module.css';

function Nav() {
    return (
        <nav className={n.nav_bar}>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Messages</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Nav;