import ib from './InfoBlock.module.css';
import avatar from '../../../img/avatar.jpg';

const InfoBlock = () => {
    return (
        <div className={ib.block}>
            <div className={ib.avatar}>
                <img src={avatar} alt={'profile-avatar'}/>
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