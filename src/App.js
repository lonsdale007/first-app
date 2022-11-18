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
                <div className={'profile-cover'}>
                    <img src={require('./img/cover.jpg')} alt={'profile-cover'}/>
                </div>
                <div className={'profile'}>
                    <div className={'profile-avatar'}>
                        <img src={require('./img/avatar.jpg')} width={150} height={150} alt={'profile-avatar'}/>
                    </div>
                    <div className={'profile-description'}>
                        <div id={'profile-name'}>Danila Artemov</div>
                        <div>Date of birth:</div>
                        <div>City:</div>
                        <div>Education:</div>
                        <div>Web site:</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
