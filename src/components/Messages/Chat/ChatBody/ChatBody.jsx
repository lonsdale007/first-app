import cb from './ChatBody.module.css';
import Message from "./Message/Message";
import avatarElya from '../../../../img/Elya.jpg';
import avatarMine from '../../../../img/avatar.jpg'

const ChatBody = (props) => {
    return (
        <div className={cb.chat}>
            <Message avatar={avatarElya} date={'11:18'} text={'Hello'} isIncoming={true}/>
            <Message avatar={avatarElya} date={'11:30'} text={'How are you?'} isIncoming={true}/>
            <Message avatar={avatarElya} date={'11:31'} text={'What r u doin?'} isIncoming={true}/>
            <Message avatar={avatarMine} date={'11:36'} text={'hi, im fine, wo ba u?'} isIncoming={false}/>
        </div>
    )
}

export default ChatBody;