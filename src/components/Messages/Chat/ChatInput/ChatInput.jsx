import ci from './ChatInput.module.css';
import send from '../../../../img/send.svg';

const ChatInput = (props) => {
    return (
        <div className={ci.new_message}>
            <input className={ci.input} type={'text'} placeholder={'Write a message...'}/>
            <span className={ci.send}>
                <img src={send} alt={''}/>
            </span>
        </div>
    )
}

export default ChatInput;