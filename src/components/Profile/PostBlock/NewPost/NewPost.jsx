import np from './NewPost.module.css';

const NewPost = () => {
    return (
        <div className={np.new_post}>
            <textarea className={np.input_field} placeholder={'What\'s new?'}/>
            <button className={np.submit} type={'submit'}>Post</button>
        </div>
    )
}

export default NewPost;