import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={'background-page'}>
                <Header/>
                <div className={'app-wrapper'}>
                    <Nav/>
                    <Routes>
                        <Route path={'/profile'} element={<Profile myPosts={props.myPosts}/>}/>
                        <Route path={'/messages/*'} element={<Messages messages={props.messages} dialogs={props.dialogs}/>}/>
                        <Route path={'/news'} element={<News newsPosts={props.newsPosts}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
