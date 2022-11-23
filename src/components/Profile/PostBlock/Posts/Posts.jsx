import ps from './Posts.module.css';
import Post from "../../../News/Post/Post";
import avatar from '../../../../img/avatar.jpg';

const Posts = () => {
    return (
        <div className={ps.posts}>
            <Post avatar={avatar} name={'Danila Artemov'} date={'23 ноя в 13:00'} text={'I\'m gay'} likes_count={'69'}/>
            <Post avatar={avatar} name={'Danila Artemov'} date={'17 ноя в 11:13'} text={'Wassup, m8?'} likes_count={'1'}/>
            <Post avatar={avatar} name={'Danila Artemov'} date={'10 ноя в 15:24'} text={'Way of Samurai'} likes_count={'-3'}/>
        </div>
    )
}

export default Posts;