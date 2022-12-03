import ib from './InfoBlock.module.css';
import Avatar from "../../common/Avatar/Avatar";
import user_avatar from '../../../img/user_avatar.svg'

const InfoBlock = () => {
    return (
        <div className={ib.block}>
            <div className={ib.avatar}>
                <Avatar avatar={user_avatar} size={'profile'}/>
                <button className={ib.update_avatar}>Update</button>
            </div>
            <div className={ib.description}>
                <div className={ib.name}>Danila Artemov</div>
                <br/>
                <div>Date of birth:</div>
                <div>City:</div>
                <div>Education:</div>
                <div>Web site:</div>
            </div>
        </div>
    )
}

export default InfoBlock;