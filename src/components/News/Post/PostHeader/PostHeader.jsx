import styles from './PostHeader.module.css';

const PostHeader = (props) => {
    return (
        <div className={styles.header}>
            <img src={props.avatar} alt={''}/>
            <div className={styles.info}>
                <span className={styles.name}>{props.name}</span>
                <span className={styles.date}>{props.date}</span>
            </div>
        </div>
    )
}

export default PostHeader;