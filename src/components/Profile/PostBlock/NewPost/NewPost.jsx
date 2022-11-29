import np from './NewPost.module.css';
import React from 'react';
import {createPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";

const NewPost = (props) => {

    let createPost = () => {
        props.dispatch(createPostActionCreator());
    }

    let onNewPostTextChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={np.new_post}>
            <textarea onChange={onNewPostTextChange} className={np.input_field} placeholder={'What\'s new?'} value={props.newPostText}/>
            <button className={np.send_post} onClick={createPost}>Post</button>
        </div>
    )
}

export default NewPost;