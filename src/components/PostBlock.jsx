import '../css/Profile.css';

function PostBlock() {
    return (
        <div className={'post-block'}>
            <div>My posts</div>
            <div className={'new-post'}>
                <textarea className={'input-field'} placeholder={'What\'s new?'}/>
                <button type={'submit'} className={'submit-button'}>Submit</button>
            </div>
            <div className={'posts'}>
                <div className={'post'}>
                    First post
                </div>
                <div className={'post'}>
                    Second post
                </div>
            </div>
        </div>
    )
}

export default PostBlock;