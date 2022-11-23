import np from './Post.module.css';

const Post = (props) => {
    return (
        <div className={np.post}>
            <img className={np.avatar} src={props.avatar} alt={''}/>
            <span className={np.name}>{props.name}</span>
            <span className={np.date}>{props.date}</span>
            <div className={np.text}>{props.text}</div>
            <img className={np.picture} src={props.pic} alt={''}/>
            <div className={np.like}>
                <img src={require('../../../img/unliked.png')}
                     onMouseOver={el => (el.currentTarget.src = require('../../../img/unliked_hover.png'))}
                     onMouseOut={el => (el.currentTarget.src = require('../../../img/unliked.png'))} alt={''}/>
                <span>{props.likes_count}</span>
            </div>
        </div>
    )
}

export default Post;