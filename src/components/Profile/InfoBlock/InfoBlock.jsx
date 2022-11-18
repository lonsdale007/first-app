import p from '../Profile.module.css';

function InfoBlock() {
    return (
        <div className={p.block}>
            <div className={p.avatar}>
                <img src={require('../../../img/avatar.jpg')} alt={'profile-avatar'}/>
            </div>
            <div className={p.description}>
                <div className={p.name}>Danila Artemov</div>
                <div>Date of birth:</div>
                <div>City:</div>
                <div>Education:</div>
                <div>Web site:</div>
            </div>
        </div>
    )
}

export default InfoBlock;