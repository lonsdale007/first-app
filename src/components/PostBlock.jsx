import p from './css/Profile.module.css';

function PostBlock() {
    return (
        <div className={p.post_block}>
            <div>My posts</div>
            <div className={p.new_post}>
                <textarea className={'input_field'} placeholder={'What\'s new?'}/>
                <button className={'submit_button'} type={'submit'}>Submit</button>
            </div>
            <div className={p.posts}>
                <div className={p.post}>
                    First post
                </div>
                <div className={p.post}>
                    Second post
                </div>
            </div>
        </div>
    )
}

export default PostBlock;