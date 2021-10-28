import styles from './loading.module.scss';

function Loading() {
    return (
        <div className={styles.loading}>
            <p className={styles.spinner}>
                <p>Loading...</p>
            </p>
        </div>
    )
}

export default Loading;