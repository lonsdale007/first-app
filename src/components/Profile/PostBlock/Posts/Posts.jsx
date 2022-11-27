import ps from './Posts.module.css';
import Post from "../../../News/Post/Post";

const Posts = (props) => {

    let myPostsElements = props.myPosts.map( p => <Post avatar={p.avatar} name={p.name} date={p.date} text={p.text} pic={p.pic} likes_count={p.likes_count}/> )

    return (
        <div className={ps.posts}>
            {myPostsElements}
        </div>
    )
}

export default Posts;