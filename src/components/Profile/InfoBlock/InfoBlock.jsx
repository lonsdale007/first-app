import ib from './InfoBlock.module.css';

const InfoBlock = () => {
    return (
        <div className={ib.block}>
            <div className={ib.avatar}>
                <img src={require('../../../img/avatar.jpg')} alt={'profile-avatar'}/>
            </div>
            <div className={ib.description}>
                <div className={ib.name}>Danila Artemov</div>
                <div>Date of birth:</div>
                <div>City:</div>
                <div>Education:</div>
                <div>Web site:</div>
            </div>
        </div>
    )
}

export default InfoBlock;