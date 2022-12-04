import styles from './UsersList.module.css';
import Loader from "../../../common/Loader/Loader";
import User from "./User/User";

const UsersList = (props) => {

    return (
        <>{
            props.isFetching
                ? <Loader/>
                : <div className={styles.users_list}>
                    {props.users.map(u => <User key={u.id} id={u.id} followed={u.followed}
                                                avatar={u.photos.small} name={u.name} status={u.status}
                                                follow={props.follow} unfollow={props.unfollow}/>)}
                </div>
        }</>
    )
}

export default UsersList;