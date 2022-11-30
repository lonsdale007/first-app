import n from './News.module.css';
import Post from "./Post/Post";
import NewPost from "../Profile/PostBlock/NewPost/NewPost";

const News = (props) => {

    let newsElements = props.newsPosts.map( n => <Post key={n.id} avatar={n.avatar} name={n.name} date={n.date} text={n.text} pic={n.pic} likes_count={n.likes_count}/> ).reverse();

    return (
        <div className={n.news}>
            <NewPost/>
            {newsElements}
        </div>
    )
}

export default News;