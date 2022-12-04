import styles from './Post.module.css';
import PostHeader from "./PostHeader/PostHeader";
import PostContent from "./PostContent/PostContent";

const Post = (props) => {
    return (
        <div className={styles.post}>
            <PostHeader avatar={props.avatar} name={props.name} date={props.date}/>
            <PostContent text={props.text} pic={props.pic} likes_count={props.likes_count}/>
        </div>
    )
}

export default Post;