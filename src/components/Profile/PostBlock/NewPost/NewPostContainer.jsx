import {createPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";
import {connect} from "react-redux";
import NewPost from "./NewPost";

const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createPost: () => {
            dispatch(createPostActionCreator())
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
    }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;