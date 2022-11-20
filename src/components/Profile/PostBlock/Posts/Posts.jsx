import ps from './Posts.module.css';
import Post from "./Post/Post";

const Posts = () => {
    return (
        <div className={ps.posts}>
            <div>My posts</div>
            <Post text={'I\'m gay'}/>
            <Post text={'Wassup, m8?'}/>
            <Post text={'Way of Samurai'}/>
        </div>
    )
}

export default Posts;