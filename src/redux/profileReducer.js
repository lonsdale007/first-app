import avaMine from "../img/avatar.jpg";

const CREATE_POST = 'CREATE-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

    let currentDateTime = new Date();
    let currentHours = currentDateTime.getHours();
    let currentMinutes = currentDateTime.getMinutes();
    let currentTime = `${currentHours<10?'0'+currentHours:currentHours}:${currentMinutes<10?'0'+currentMinutes:currentMinutes}`;

    switch (action.type) {
        case(CREATE_POST):
            let newPost = {
                id: 7,
                avatar: avaMine,
                name: 'Danila Artemov',
                date: `today at ${currentTime}`,
                text: state.newPostText,
                pic: '',
                likes_count: 0,
            }
            state.myPosts.push(newPost);
            state.newPostText = '';
            return state;
        case(UPDATE_NEW_POST_TEXT):
            state.newPostText = action.postText;
            return state;
        default:
            return state;
    }
}

export const createPostActionCreator = () => ({type: CREATE_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, postText: text});

export default profileReducer;