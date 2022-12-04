import styles from './PostContent.module.css';
import liked from '../../../../assets/images/liked.svg';
import unliked from '../../../../assets/images/unliked.svg';
import unliked_hover from '../../../../assets/images/unliked_hover.svg';

const PostContent = (props) => {
    return (
        <div className={styles.content}>
            <div className={styles.text}>{props.text}</div>
            <img className={styles.picture} src={props.pic} alt={''}/>
            <div className={styles.like}>
                <img src={unliked}
                     onMouseOver={el => (el.currentTarget.src = unliked_hover)}
                     onMouseOut={el => (el.currentTarget.src = unliked)} alt={''}/>
                <span>{props.likes_count}</span>
            </div>
        </div>
    )
}

export default PostContent;