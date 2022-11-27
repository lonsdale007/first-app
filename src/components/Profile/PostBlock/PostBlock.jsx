import pb from './PostBlock.module.css';
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";

const PostBlock = (props) => {
    return (
        <div className={pb.post_block}>
            <NewPost/>
            <Posts myPosts={props.myPosts}/>
        </div>
    )
}

export default PostBlock;