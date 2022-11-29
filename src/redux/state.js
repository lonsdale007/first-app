import avaElya from "../img/Elya.jpg";
import avaDima from "../img/Dima.jpg";
import avaVanya from "../img/Vanya.jpg";
import avaEgor from "../img/Egor.jpg";
import avaMine from "../img/avatar.jpg";
import group_avatar from "../img/group_avatar.jpg";
import nature from "../img/nature.jpg";
import lionScreen from "../img/lionAppScreen.jpg";
import sunset from "../img/sunset.jpg";

const CREATE_POST = 'CREATE-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            myPosts: [
                { id: 1, avatar: avaMine, name: 'Danila Artemov', date: '10 Nov at 15:24', text: 'Way of Samurai', likes_count: 3 },
                { id: 2, avatar: avaMine, name: 'Danila Artemov', date: '17 Nov at 11:13', text: 'Wassup, m8?', likes_count: 1 },
                { id: 4, avatar: avaMine, name: 'Danila Artemov', date: '23 Nov at 13:00', text: 'I\'m gay', likes_count: 69 },
                { id: 5, avatar: avaMine, name: 'Danila Artemov', date: 'today at 12:51', text: 'new post', pic: lionScreen, likes_count: 2 },
            ],
            newPostText: '',
        },
        messagesPage: {
            dialogs: [
                { id: 1, name: 'Elvira Shurygina', avatar: avaElya, text: 'hi, im fine, wo ba u?' },
                { id: 2, name: 'Dmitry Chernikov', avatar: avaDima, text: 'hello from KZ' },
                { id: 3, name: 'Ivan Bogomolov', avatar: avaVanya, text: 'read about js on mdn' },
                { id: 4, name: 'Egor Emelyanov', avatar: avaEgor, text: 'go cs' },
            ],
            messages: [
                { id_dialog: 1, id_message: 1, date: '11:18', text: 'Hello', isIncoming: true },
                { id_dialog: 1, id_message: 2, date: '11:30', text: 'How are you?', isIncoming: true },
                { id_dialog: 1, id_message: 3, date: '11:31', text: 'hat r u doin?', isIncoming: true },
                { id_dialog: 1, id_message: 4, date: '11:36', text: 'hi, im fine, wo ba u?', isIncoming: false },
                { id_dialog: 2, id_message: 1, date: '12:25', text: 'hello from KZ', isIncoming: true },
                { id_dialog: 3, id_message: 1, date: '16:13', text: 'read about js on mdn', isIncoming: true },
                { id_dialog: 4, id_message: 1, date: '15:14', text: 'go cs', isIncoming: true },
            ],
            newMessageText: '',
        },
        newsPage: {
            newsPosts: [
                { id: 1, avatar: avaMine, name: 'Danila Artemov', date: '10 Nov at 15:24', text: 'Way of Samurai', likes_count: 3 },
                { id: 2, avatar: avaMine, name: 'Danila Artemov', date: '17 Nov at 11:13', text: 'Wassup, m8?', likes_count: 1 },
                { id: 3, avatar: group_avatar, name: 'Public group', date: '20 Nov at 19:13', text: 'Great sunset', pic: sunset, likes_count: 34 },
                { id: 4, avatar: avaMine, name: 'Danila Artemov', date: '23 Nov at 13:00', text: 'I\'m gay', likes_count: 69 },
                { id: 5, avatar: avaMine, name: 'Danila Artemov', date: 'today at 12:51', text: 'new post', pic: lionScreen, likes_count: 2 },
                { id: 6, avatar: group_avatar, name: 'Public group', date: 'today at 13:09', text: 'What a beautiful nature!', pic: nature, likes_count: 12 },
            ],
        },
    },
    _callSubscriber() {
        console.log('State changed');
    },
    _getNewID(array) {
        return array.length+1;
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        let currentDateTime = new Date();
        let currentHours = currentDateTime.getHours();
        let currentMinutes = currentDateTime.getMinutes();
        let currentTime = `${currentHours<10?'0'+currentHours:currentHours}:${currentMinutes<10?'0'+currentMinutes:currentMinutes}`;

        switch (action.type) {
            case(CREATE_POST):
                let now = `today at ${currentTime}`;

                let newPost = {
                    id: this._getNewID(this._state.newsPage.newsPosts),
                    avatar: avaMine,
                    name: 'Danila Artemov',
                    date: now,
                    text: this._state.profilePage.newPostText,
                    pic: '',
                    likes_count: 0,
                }
                this._state.profilePage.myPosts.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber();
                break;
            case(UPDATE_NEW_POST_TEXT):
                this._state.profilePage.newPostText = action.postText;
                this._callSubscriber();
                break;
            case(SEND_MESSAGE):
                let newMessage = {
                    id_dialog: 1,
                    id_message: this._getNewID(this._state.messagesPage.messages.filter(obj => obj.id_dialog === 1)),
                    text: this._state.messagesPage.newMessageText,
                    date: currentTime,
                    isIncoming: false,
                }

                this._state.messagesPage.messages.push(newMessage);
                this._state.messagesPage.newMessageText = '';
                this._callSubscriber();
                break;
            case(UPDATE_NEW_MESSAGE_TEXT):
                this._state.messagesPage.newMessageText = action.messageText;
                this._callSubscriber();
                break;
            default:
                console.log('Wrong action type');
        }
    }
}

export const createPostActionCreator = () => ({type: CREATE_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, postText: text});
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, messageText: text});

export default store;