import ps from './Posts.module.css';
import Post from "./Post/Post";

function Posts() {
    return (
        <div className={ps.posts}>
            <div>My posts</div>
            <Post/>
        </div>
    )
}

export default Posts;