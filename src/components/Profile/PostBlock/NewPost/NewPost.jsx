import np from './NewPost.module.css';

const NewPost = () => {
    return (
        <div className={np.new_post}>
            <textarea className={np.input_field} placeholder={'What\'s new?'}/>
            <button className={np.send_post}>Post</button>
        </div>
    )
}

export default NewPost;