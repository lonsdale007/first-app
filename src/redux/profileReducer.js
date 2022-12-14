import user_avatar from "../assets/images/user_avatar.svg";
import lionScreen from "../assets/images/lionAppScreen.jpg";

const CREATE_POST = 'CREATE_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initState = {
    profile: null,
    myPosts: [
        {id: 1, avatar: user_avatar, name: 'Danila Artemov', date: '10 Nov at 15:24', text: 'Way of Samurai', likes_count: 3},
        {id: 2, avatar: user_avatar, name: 'Danila Artemov', date: '17 Nov at 11:13', text: 'Wassup, m8?', likes_count: 1},
        {id: 4, avatar: user_avatar, name: 'Danila Artemov', date: '23 Nov at 13:00', text: 'I\'m gay', likes_count: 69},
        {id: 5, avatar: user_avatar, name: 'Danila Artemov', date: 'today at 12:51', text: 'new post', pic: lionScreen, likes_count: 2},
    ],
    newPostText: '',
}

const profileReducer = (state = initState, action) => {

    let currentDateTime = new Date();
    let currentHours = currentDateTime.getHours();
    let currentMinutes = currentDateTime.getMinutes();
    let currentTime = `${currentHours < 10 ? '0' + currentHours : currentHours}:${currentMinutes < 10 ? '0' + currentMinutes : currentMinutes}`;

    switch (action.type) {
        case CREATE_POST:
            let newPost = {
                id: 7,
                avatar: user_avatar,
                name: 'Danila Artemov',
                date: `today at ${currentTime}`,
                text: state.newPostText,
                pic: null,
                likes_count: 0,
            }

            return {
                ...state,
                newPostText: '',
                myPosts: [...state.myPosts, newPost],
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.postText,
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}

export const createPostActionCreator = () => ({type: CREATE_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, postText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export default profileReducer;