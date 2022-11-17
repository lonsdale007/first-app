import './App.css';
import logo from './logo.svg';

function App() {
    return (
        <div className={'app-wrapper'}>
            <header className={'header'}>
                <img src={logo} width={60} height={60} alt={''}/>
                <div className={'app-name'}>
                    <text id={'left-part-name'}>Li-</text>
                    <text id={'right-part-name'}>ON</text>
                </div>
            </header>
            <nav className={'nav-bar'}>
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
            <div className={'content'}>
                Main content
            </div>
        </div>
    );
}

export default App;
