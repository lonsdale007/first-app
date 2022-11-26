import ps from './Posts.module.css';
import Post from "../../../News/Post/Post";
import avatar from '../../../../img/avatar.jpg';

const Posts = () => {

    let myPostsData = [
        {avatar: avatar, name: 'Danila Artemov', date: '23 ноя в 13:00', text: 'I\'m gay', likes_count: 69},
        {avatar: avatar, name: 'Danila Artemov', date: '17 ноя в 11:13', text: 'Wassup, m8?', likes_count: 1},
        {avatar: avatar, name: 'Danila Artemov', date: '10 ноя в 15:24', text: 'Way of Samurai', likes_count: 3},
    ]

    return (
        <div className={ps.posts}>
            <Post avatar={myPostsData[0].avatar} name={myPostsData[0].name} date={myPostsData[0].date} text={myPostsData[0].text} likes_count={myPostsData[0].likes_count}/>
            <Post avatar={myPostsData[0].avatar} name={myPostsData[0].name} date={yPostsData[0].date} text={myPostsData[0].text} likes_count={myPostsData[0].likes_count}/>
            <Post avatar={myPostsData[0].avatar} name={myPostsData[0].name} date={yPostsData[0].date} text={myPostsData[0].text} likes_count={myPostsData[0].likes_count}/>
        </div>
    )
}

export default Posts;