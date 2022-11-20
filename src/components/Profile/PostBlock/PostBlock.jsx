import pb from './PostBlock.module.css';
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";

const PostBlock = () => {
    return (
        <div className={pb.post_block}>
            <NewPost/>
            <Posts/>
        </div>
    )
}

export default PostBlock;