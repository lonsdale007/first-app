import logo from "../../logo.svg";
import h from './Header.module.css';

const Header = () => {
    return (
        <header className={h.header}>
            <div className={h.content}>
                <img className={h.header_img} src={logo} alt={''}/>
                <div className={h.app_name}>
                    Li-<span id={'right_part_name'}>ON</span>
                </div>
            </div>
        </header>
    )
}

export default Header;