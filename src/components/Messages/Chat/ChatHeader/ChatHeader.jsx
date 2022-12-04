import styles from './ChatHeader.module.css';
import Avatar from "../../../common/Avatar/Avatar";
import user_avatar from '../../../../assets/images/user_avatar.svg';

const ChatHeader = (props) => {
    return (
        <div className={styles.header}>
            <span className={styles.name}>{props.name}</span>
            <Avatar avatar={user_avatar} size={'small'}/>
        </div>
    )
}

export default ChatHeader;