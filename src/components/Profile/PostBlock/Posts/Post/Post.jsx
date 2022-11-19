import p from './Post.module.css';

function Post() {
    return (
        <div className={p.post}>
            <div className={p.content}>
                <div className={p.avatar}>
                    <img src={require('../../../../../img/avatar.jpg')} alt={''}/>
                </div>
                <div className={p.text}>
                    Text...
                </div>
            </div>
            <div className={p.like}>
                <img src={require('../../../../../img/unliked.png')}
                     onMouseOver={el => (el.currentTarget.src = require('../../../../../img/unliked_hover.png'))}
                     onMouseOut={el => (el.currentTarget.src = require('../../../../../img/unliked.png'))} alt={''}/>
            </div>
        </div>
    )
}

export default Post;