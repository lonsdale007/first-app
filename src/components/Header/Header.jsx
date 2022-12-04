import styles from './Header.module.css';
import AppLogo from "../common/AppLogo/AppLogo";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <AppLogo/>
                <div className={styles.app_name}>
                    Li-<span id={'right_part_name'}>ON</span>
                </div>
            </div>
        </header>
    )
}

export default Header;