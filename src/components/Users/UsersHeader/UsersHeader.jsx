import styles from './UsersHeader.module.css';

const UsersHeader = (props) => {

    return (
        <div className={styles.header}>
            <span>Users</span>
            <span className={styles.total_count}>{props.totalCount}</span>
        </div>
    )
}

export default UsersHeader;