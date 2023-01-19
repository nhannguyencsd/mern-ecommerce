import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ProductGallery.module.scss';

const cx = classNames.bind(styles);

function ProductGallery({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const selectImage = (currentIndex) => {
        setCurrentIndex(currentIndex);
    };

    return (
        <div className={cx('wrapper')}>
            {/* main image */}
            <div className={cx('image-cell')}>
                <img src={images[currentIndex].src} alt="product img" />
            </div>
            {/* thumnail images */}
            <div className={cx('thumbnail-cell')}>
                {images.map((image, index) => (
                    <div className={cx('thumbnail')} onMouseMove={() => selectImage(index)} key={index}>
                        <img src={images[index].src} alt="product img" />
                    </div>
                ))}
            </div>
            {/* for medium responsive  */}
            {images.map((image, index) => (
                <div className={cx('image-cell-medium')} key={index}>
                    <img src={image.src} alt="product img" />
                </div>
            ))}
        </div>
    );
}

export default ProductGallery;
