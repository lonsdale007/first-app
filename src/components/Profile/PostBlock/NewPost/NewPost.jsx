import np from './NewPost.module.css';

function NewPost() {
    return (
        <div className={np.new_post}>
            <textarea className={np.input_field} placeholder={'What\'s new?'}/>
            <button className={np.submit} type={'submit'}>Submit</button>
        </div>
    )
}

export default NewPost;