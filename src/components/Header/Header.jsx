import h from './Header.module.css';
import AppLogo from "../common/AppLogo/AppLogo";

const Header = () => {
    return (
        <header className={h.header}>
            <div className={h.content}>
                <AppLogo/>
                <div className={h.app_name}>
                    Li-<span id={'right_part_name'}>ON</span>
                </div>
            </div>
        </header>
    )
}

export default Header;