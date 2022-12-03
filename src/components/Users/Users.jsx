import u from './Users.module.css';
import search_icon from '../../img/search.svg';
import User from "./User/User";
import user_avatar from "../../img/user_avatar.svg";

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                userID: 1,
                followed: true,
                fullName: 'Elvira Shurygina',
                avatar: user_avatar,
                status: 'I\'m the best girl',
                bdate: '02.09.1998',
                location: {country: 'Russia', city: 'Volgograd'}
            },
            {
                userID: 2,
                followed: false,
                fullName: 'Dmitry Chernikov',
                avatar: user_avatar,
                status: 'The Devil\'s Advocate',
                bdate: '10.05.1999',
                location: {country: 'Russia', city: 'Volgograd'}
            },
            {
                userID: 3,
                followed: false,
                fullName: 'Ivan Bogomolov',
                avatar: user_avatar,
                status: 'React-developer',
                bdate: '22.02.1999',
                location: {country: 'Russia', city: 'Volgograd'}
            },
            {
                userID: 4,
                followed: false,
                fullName: 'Egor Emelyanov',
                avatar: user_avatar,
                status: 'Student of VolGU',
                bdate: '22.03.1999',
                location: {country: 'Russia', city: 'Volgograd'}
            },
        ]);
    }

    let usersElement = props.users.map(u => <User key={u.userID} userID={u.userID} followed={u.followed}
                                                  avatar={u.avatar} name={u.fullName} status={u.status}
                                                  location={u.location} follow={props.follow}
                                                  unfollow={props.unfollow}/>);

    return (
        <div className={u.users}>
            <div className={u.selection}>
                <div className={`${u.selection_area} ${u.selection_area_selected}`}>
                    <div className={u.selection_text}>
                        <span className={u.selection_name}>Following</span>
                        <span className={u.selection_count}>{props.totalCount}</span>
                    </div>
                </div>
                <div className={u.selection_area}>
                    <div className={u.selection_text}>
                        <span className={u.selection_name}>All users</span>
                        <span className={u.selection_count}>{props.totalCount}</span>
                    </div>
                </div>
            </div>
            <div className={u.body}>
                <div className={u.search_wrapper}>
                    <input className={u.search_input} type={'search'} placeholder={'Search users'}/>
                    <span className={u.search_btn}>
                        <img src={search_icon} alt={'search'}/>
                    </span>
                </div>
                <div className={u.users_list}>
                    {usersElement}
                </div>
            </div>
        </div>
    )
}

export default Users;