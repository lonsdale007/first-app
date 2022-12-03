import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import {Route, Routes} from "react-router-dom";
import NewsContainer from "./components/News/NewsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
    return (
        <div className={'background-page'}>
            <Header/>
            <div className={'app-wrapper'}>
                <Nav/>
                <Routes>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path={'/messages/*'} element={<Messages/>}/>
                    <Route path={'/users/*'} element={<UsersContainer/>}/>
                    <Route path={'/news'} element={<NewsContainer/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
