import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";

const App = (props) => {
    return (
        <div className={'background-page'}>
            <Header/>
            <div className={'app-wrapper'}>
                <Nav/>
                <Routes>
                    <Route path={'/profile'}
                           element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
                    <Route path={'/messages/*'}
                           element={<Messages messagesPage={props.state.messagesPage} dispatch={props.dispatch}/>}/>
                    <Route path={'/news'} element={<News newsPage={props.state.newsPage}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
