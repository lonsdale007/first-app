import styles from './Message.module.css';

const Message = (props) => {

    return (
        <div className={styles.message + (props.isIncoming ? ' ' + styles.incoming : ' ' + styles.outgoing)}>
            <div className={styles.text}>{props.text}</div>
            <span className={styles.date}>{props.date}</span>
        </div>
    )
}

export default Message;