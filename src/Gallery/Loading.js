import styles from './loading.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

function Loading() {
    return (
        <div className={styles.loading}>
            <p className={styles.spinner}>
                <FontAwesomeIcon icon={faSpinner} spin />
            </p>
        </div>
    )
}

export default Loading;