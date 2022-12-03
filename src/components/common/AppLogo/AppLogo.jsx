import logo from "../../../logo.svg";
import al from './AppLogo.module.css';

const AppLogo = () => {
    return (
        <div className={al.logo_wrapper}>
            <img src={logo} alt={'AppLogo'}/>
        </div>
    )
}

export default AppLogo;