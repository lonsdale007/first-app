import ch from './ChatHeader.module.css';

const ChatHeader = (props) => {
    return (
        <div className={ch.header}>
            <span className={ch.name}>{props.name}</span>
            <img className={ch.avatar} src={props.avatar} alt={''}/>
        </div>
    )
}

export default ChatHeader;