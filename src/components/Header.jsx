import logo from "../logo.svg";
import '../css/Header.css';

function Header() {
    return (
        <header className={'header'}>
            <img src={logo} width={60} height={60} alt={''}/>
            <div className={'app-name'}>
                <text id={'left-part-name'}>Li-</text>
                <text id={'right-part-name'}>ON</text>
            </div>
        </header>
    )
}

export default Header;