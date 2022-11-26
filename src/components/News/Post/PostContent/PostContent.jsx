import pc from './PostContent.module.css';
import liked from '../../../../img/liked.svg';
import unliked from '../../../../img/unliked.svg';
import unliked_hover from '../../../../img/unliked_hover.svg';

const PostContent = (props) => {
    return (
        <div className={pc.content}>
            <div className={pc.text}>{props.text}</div>
            <img className={pc.picture} src={props.pic} alt={''}/>
            <div className={pc.like}>
                <img src={unliked}
                     onMouseOver={el => (el.currentTarget.src = unliked_hover)}
                     onMouseOut={el => (el.currentTarget.src = unliked)} alt={''}/>
                <span>{props.likes_count}</span>
            </div>
        </div>
    )
}

export default PostContent;