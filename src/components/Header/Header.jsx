import logo from "../../logo.svg";
import h from './Header.module.css';

const Header = () => {
    return (
        <header className={h.header}>
            <img src={logo} alt={''}/>
            <div className={h.app_name}>
                Li-<text id={'right_part_name'}>ON</text>
            </div>
        </header>
    )
}

export default Header;