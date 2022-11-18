import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";

function App() {
    return (
        <div className={'background-page'}>
            <div className={'app-wrapper'}>
                <Header/>
                <Nav/>
                <Profile/>
            </div>
        </div>
    );
}

export default App;
