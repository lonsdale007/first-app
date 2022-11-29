import avaMine from "../img/avatar.jpg";
import group_avatar from "../img/group_avatar.jpg";
import sunset from "../img/sunset.jpg";
import lionScreen from "../img/lionAppScreen.jpg";
import nature from "../img/nature.jpg";


let initState = {
    newsPosts: [
        { id: 1, avatar: avaMine, name: 'Danila Artemov', date: '10 Nov at 15:24', text: 'Way of Samurai', likes_count: 3 },
        { id: 2, avatar: avaMine, name: 'Danila Artemov', date: '17 Nov at 11:13', text: 'Wassup, m8?', likes_count: 1 },
        { id: 3, avatar: group_avatar, name: 'Public group', date: '20 Nov at 19:13', text: 'Great sunset', pic: sunset, likes_count: 34 },
        { id: 4, avatar: avaMine, name: 'Danila Artemov', date: '23 Nov at 13:00', text: 'I\'m gay', likes_count: 69 },
        { id: 5, avatar: avaMine, name: 'Danila Artemov', date: 'today at 12:51', text: 'new post', pic: lionScreen, likes_count: 2 },
        { id: 6, avatar: group_avatar, name: 'Public group', date: 'today at 13:09', text: 'What a beautiful nature!', pic: nature, likes_count: 12 },
    ],
}

const newsReducer = (state = initState, action) => {

    return state;
}

export default newsReducer;