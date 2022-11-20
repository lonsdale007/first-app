import d from './Dialog.module.css';

const Dialog = (props) => {
    return (
        <div className={d.dialog}>
            <img className={d.avatar} src={require('../../../../img/Elya.jpg')} alt={''}/>
            <span className={d.name}>{props.name}</span>
            <span className={d.text}>{props.text}</span>
        </div>
    )
}

export default Dialog;