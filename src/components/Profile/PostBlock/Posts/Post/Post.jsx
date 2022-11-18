import p from './Post.module.css';

function Post() {
    return (
        <div className={p.post}>
            <img src={require('../../../../../img/avatar.jpg')} alt={''}/>
            Text of post...
        </div>
    )
}

export default Post;