import ps from './Posts.module.css';
import Post from "./Post/Post";

function Posts() {
    return (
        <div className={ps.posts}>
            <Post/>
        </div>
    )
}

export default Posts;