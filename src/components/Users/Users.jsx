import styles from './Users.module.css';
import UsersHeader from "./UsersHeader/UsersHeader";
import UsersBody from "./UsersBody/UsersBody";
import Paginator from "../common/Paginator/Paginator";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= 10; i++) {
        pages.push(i);
    }

    return (
        <div className={styles.users}>
            <UsersHeader totalCount={props.totalCount}/>
            <UsersBody users={props.users} follow={props.follow} unfollow={props.unfollow} isFetching={props.isFetching}/>
            <div className={styles.paginator}>
                <Paginator pages={pages} currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                           toPrevPage={props.toPrevPage} toNextPage={props.toNextPage}/>
            </div>
        </div>
    )
}

export default Users;