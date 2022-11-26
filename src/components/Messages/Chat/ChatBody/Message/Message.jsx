import m from './Message.module.css';

const Message = (props) => {

    let isIncoming = props.isIncoming;

    return (
        <div className={m.message + (isIncoming ? ' ' + m.incoming : ' ' + m.outgoing)}>
            <div className={m.text}>{props.text}</div>
            <span className={m.date}>{props.date}</span>
        </div>
    )
}

export default Message;