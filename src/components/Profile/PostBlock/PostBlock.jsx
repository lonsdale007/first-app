import pb from './PostBlock.module.css';
import NewPostContainer from "./NewPost/NewPostContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const PostBlock = (props) => {
    return (
        <div className={pb.post_block}>
            <NewPostContainer/>
            <MyPostsContainer/>
        </div>
    )
}

export default PostBlock;