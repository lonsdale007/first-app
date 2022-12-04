import logo from "../../../logo.svg";
import styles from './AppLogo.module.css';

const AppLogo = () => {
    return (
        <div className={styles.logo_wrapper}>
            <img src={logo} alt={'AppLogo'}/>
        </div>
    )
}

export default AppLogo;