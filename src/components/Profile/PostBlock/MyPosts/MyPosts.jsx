import styles from './MyPosts.module.css';
import Post from "../../../News/Post/Post";

const MyPosts = (props) => {

    let myPostsElements = props.myPosts.map(
        p => <Post key={p.id} avatar={p.avatar} name={p.name} date={p.date} text={p.text}
                   pic={p.pic} likes_count={p.likes_count}/> ).reverse();

    return (
        <div className={styles.posts}>
            {myPostsElements}
        </div>
    )
}

export default MyPosts;