import pb from './PostBlock.module.css';
import MyPosts from "./MyPosts/MyPosts";
import NewPost from "./NewPost/NewPost";

const PostBlock = (props) => {
    return (
        <div className={pb.post_block}>
            <NewPost/>
            <MyPosts myPosts={props.myPosts}/>
        </div>
    )
}

export default PostBlock;