import pb from './PostBlock.module.css';
import MyPosts from "./MyPosts/MyPosts";
import NewPost from "./NewPost/NewPost";

const PostBlock = (props) => {
    return (
        <div className={pb.post_block}>
            <NewPost newPostText={props.newPostText} dispatch={props.dispatch}/>
            <MyPosts myPosts={props.myPosts}/>
        </div>
    )
}

export default PostBlock;