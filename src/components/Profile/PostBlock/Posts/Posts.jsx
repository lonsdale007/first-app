import ps from './Posts.module.css';
import Post from "./Post/Post";

const Posts = () => {
    return (
        <div className={ps.posts}>
            <div>My posts</div>
            <Post text={'I\'m gay'} likes_count={'69'}/>
            <Post text={'Wassup, m8?'} likes_count={'1'}/>
            <Post text={'Way of Samurai'} likes_count={'-3'}/>
        </div>
    )
}

export default Posts;