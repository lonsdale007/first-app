import n from './News.module.css';
import Post from "./Post/Post";
import NewPost from "../Profile/PostBlock/NewPost/NewPost";
import group_avatar from'../../img/group_avatar.jpg';
const News = (props) => {

    let newsData = [
        {avatar: group_avatar, name: 'Public group', date: '20 ноя в 19:13', text: 'Great sunset', pic: 'https://images.alphacoders.com/852/thumb-1920-852592.jpg', likes_count: 5}
    ]

    return (
        <div className={n.news}>
            <NewPost/>
            <Post
                avatar={newsData[0].avatar}
                name={newsData[0].name}
                date={newsData[0].date}
                text={newsData[0].text}
                pic={newsData[0].pic}
                likes_count={newsData[0].likes_count}
            />
        </div>
    )
}

export default News;