import styles from './UsersBody.module.css';
import UsersSearch from "./UsersSearch/UsersSearch";
import UsersList from "./UsersList/UsersList";

const UsersBody = (props) => {

    return (
        <div className={styles.body}>
            <UsersSearch/>
            <UsersList users={props.users} isFetching={props.isFetching} follow={props.follow} unfollow={props.unfollow}/>
        </div>
    )
}

export default UsersBody;