import np from './NewPost.module.css';
import React from 'react';

const NewPost = (props) => {

    let onCreatePostClick = () => {
        props.createPost();
    }

    let onNewPostTextChange = (e) => {
        debugger
        let text = e.target.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={np.new_post}>
            <textarea onChange={onNewPostTextChange} className={np.input_field} placeholder={'What\'s new?'} value={props.newPostText}/>
            <button className={np.send_post} onClick={onCreatePostClick}>Post</button>
        </div>
    )
}

export default NewPost;