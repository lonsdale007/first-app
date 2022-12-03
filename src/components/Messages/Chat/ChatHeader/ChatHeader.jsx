import ch from './ChatHeader.module.css';
import Avatar from "../../../common/Avatar/Avatar";
import user_avatar from '../../../../img/user_avatar.svg';

const ChatHeader = (props) => {
    return (
        <div className={ch.header}>
            <span className={ch.name}>{props.name}</span>
            <Avatar avatar={user_avatar} size={'small'}/>
        </div>
    )
}

export default ChatHeader;