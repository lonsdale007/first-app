import user_avatar from "../assets/images/user_avatar.svg";
import group_avatar from "../assets/images/group_avatar.svg";
import sunset from "../assets/images/sunset.jpg";
import lionScreen from "../assets/images/lionAppScreen.jpg";
import nature from "../assets/images/nature.jpg";


let initState = {
    newsPosts: [
        { id: 1, avatar: user_avatar, name: 'Danila Artemov', date: '10 Nov at 15:24', text: 'Way of Samurai', likes_count: 3 },
        { id: 2, avatar: user_avatar, name: 'Danila Artemov', date: '17 Nov at 11:13', text: 'Wassup, m8?', likes_count: 1 },
        { id: 3, avatar: group_avatar, name: 'Public group', date: '20 Nov at 19:13', text: 'Great sunset', pic: sunset, likes_count: 34 },
        { id: 4, avatar: user_avatar, name: 'Danila Artemov', date: '23 Nov at 13:00', text: 'I\'m gay', likes_count: 69 },
        { id: 5, avatar: user_avatar, name: 'Danila Artemov', date: 'today at 12:51', text: 'new post', pic: lionScreen, likes_count: 2 },
        { id: 6, avatar: group_avatar, name: 'Public group', date: 'today at 13:09', text: 'What a beautiful nature!', pic: nature, likes_count: 12 },
    ],
}

const newsReducer = (state = initState, action) => {

    return state;
}

export default newsReducer;