import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Messages from "./components/Messages/Messages";
import {Route, Routes} from "react-router-dom";
import NewsContainer from "./components/News/NewsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
    return (
        <div className={'background-page'}>
            <Header/>
            <div className={'app-wrapper'}>
                <Nav/>
                <Routes>
                    <Route path={'/profile/:userID'} element={<ProfileContainer/>}/>
                    <Route path={'/profile/26975'} element={<ProfileContainer/>}/>
                    <Route path={'/messages/*'} element={<Messages/>}/>
                    <Route path={'/users/*'} element={<UsersContainer/>}/>
                    <Route path={'/news'} element={<NewsContainer/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
