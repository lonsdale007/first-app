import np from './NewsPost.module.css';

const NewsPost = (props) => {
    return (
        <div className={np.post}>
            <div className={np.info}>
                <img className={np.avatar} src={props.avatar} alt={''}/>
                <div className={np.who_when}>
                    <span className={np.name}>{props.name}</span>
                    <span className={np.date}>{props.date}</span>
                </div>
            </div>
            <textarea>{props.text}</textarea>
            <img className={np.picture} src={props.pic} alt={''}/>
        </div>
    )
}

export default NewsPost;