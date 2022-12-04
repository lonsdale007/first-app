import styles from './Paginator.module.css';

const Paginator = (props) => {
    return (
        <div className={styles.paginator}>
            <span className={styles.prev_page} onClick={() => {props.toPrevPage(props.currentPage)}}>{'«'}</span>
            {props.pages.map(p => <span key={p}
                                        className={`${styles.page_number} ${props.currentPage === p && styles.selected_page}`}
                                        onClick={() => {props.onPageChanged(p)}}>{p}</span>)}
            <span className={styles.next_page} onClick={() => {props.toNextPage(props.currentPage)}}>{'»'}</span>
        </div>
    )
}

export default Paginator;