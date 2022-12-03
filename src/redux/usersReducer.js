const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

const initState = {
    users: [],
    totalCount: 4,
}

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USERS:
            debugger
            return {
                ...state,
                users: action.users,
            }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.userID === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.userID === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                }),
            }
        default:
            return state
    }
}

export const setUsersAC = (users) => ({type: SET_USERS, users});
export const followAC = (userID) => ({type: FOLLOW, userID});
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID});

export default usersReducer;