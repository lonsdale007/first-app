import ph from './PostHeader.module.css';

const PostHeader = (props) => {
    return (
        <div className={ph.header}>
            <img src={props.avatar} alt={''}/>
            <div className={ph.info}>
                <span className={ph.name}>{props.name}</span>
                <span className={ph.date}>{props.date}</span>
            </div>
        </div>
    )
}

export default PostHeader;