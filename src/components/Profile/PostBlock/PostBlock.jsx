import pb from './PostBlock.module.css';
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";

function PostBlock() {
    return (
        <div className={pb.post_block}>
            <div>My posts</div>
            <NewPost/>
            <Posts/>
        </div>
    )
}

export default PostBlock;