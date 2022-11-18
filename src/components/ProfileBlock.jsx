import '../css/Profile.css';

function ProfileBlock() {
    return (
        <div className={'profile-block'}>
            <div className={'profile-avatar'}>
                <img src={require('../img/avatar.jpg')} width={150} height={150} alt={'profile-avatar'}/>
            </div>
            <div className={'profile-description'}>
                <div id={'profile-name'}>Danila Artemov</div>
                <div>Date of birth:</div>
                <div>City:</div>
                <div>Education:</div>
                <div>Web site:</div>
            </div>
        </div>
    )
}

export default ProfileBlock;