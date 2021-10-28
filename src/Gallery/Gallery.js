import styles from './gallery.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Gallery(props) {

    function ImageList() {
        if (props.images) {
            return props.images.map(item => {
                return  (
                    <LazyLoadImage
                        key={item.id}
                        alt={item.Title}
                        src={item.Image.url}
                    />
                );
            })
        }
    }

    return (
        <div className={styles.gallery}>
            <div className={styles.header}>
                <h1 className="header header--large">Landscapes</h1>
                <p className="no-margin">By Michael Boyd</p>
            </div>
            <div className={styles.container}>
                <ImageList/>
            </div>
        </div>
    );
}


export default Gallery;