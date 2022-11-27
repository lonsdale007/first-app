import avaElya from "../img/Elya.jpg";
import avaDima from "../img/Dima.jpg";
import avaVanya from "../img/Vanya.jpg";
import avaEgor from "../img/Egor.jpg";
import avaMine from "../img/avatar.jpg";
import group_avatar from "../img/group_avatar.jpg";
import nature from "../img/nature.jpg";
import lionScreen from "../img/lionAppScreen.jpg";
import sunset from "../img/sunset.jpg";

let state = {
    dialogs: [
        { id: 1, name: 'Elvira Shurygina', avatar: avaElya, text: 'hi, im fine, wo ba u?' },
        { id: 2, name: 'Dmitry Chernikov', avatar: avaDima, text: 'hello from KZ' },
        { id: 3, name: 'Ivan Bogomolov', avatar: avaVanya, text: 'read about js on mdn' },
        { id: 4, name: 'Egor Emelyanov', avatar: avaEgor, text: 'go cs' },
    ],
    messages: [
        { avatar: avaElya, date: '11:18', text: 'Hello', isIncoming: true },
        { avatar: avaElya, date: '11:30', text: 'How are you?', isIncoming: true },
        { avatar: avaElya, date: '11:31', text: 'hat r u doin?', isIncoming: true },
        { avatar: avaMine, date: '11:36', text: 'hi, im fine, wo ba u?', isIncoming: false },
    ],
    newsPosts: [
        { avatar: group_avatar, name: 'Public group', date: 'today at 13:09', text: 'What a beautiful nature!', pic: nature, likes_count: 12 },
        { avatar: avaMine, name: 'Danila Artemov', date: 'today at 12:51', text: 'new post', pic: lionScreen, likes_count: 2 },
        { avatar: avaMine, name: 'Danila Artemov', date: '23 Nov at 13:00', text: 'I\'m gay', likes_count: 69 },
        { avatar: group_avatar, name: 'Public group', date: '20 Nov at 19:13', text: 'Great sunset', pic: sunset, likes_count: 34 },
        { avatar: avaMine, name: 'Danila Artemov', date: '17 Nov at 11:13', text: 'Wassup, m8?', likes_count: 1 },
        { avatar: avaMine, name: 'Danila Artemov', date: '10 Nov at 15:24', text: 'Way of Samurai', likes_count: 3 },
    ],
    myPosts: [
        { avatar: avaMine, name: 'Danila Artemov', date: 'today at 12:51', text: 'new post', pic: lionScreen, likes_count: 2 },
        { avatar: avaMine, name: 'Danila Artemov', date: '23 Nov at 13:00', text: 'I\'m gay', likes_count: 69 },
        { avatar: avaMine, name: 'Danila Artemov', date: '17 Nov at 11:13', text: 'Wassup, m8?', likes_count: 1 },
        { avatar: avaMine, name: 'Danila Artemov', date: '10 Nov at 15:24', text: 'Way of Samurai', likes_count: 3 },
    ],
};

export default state;