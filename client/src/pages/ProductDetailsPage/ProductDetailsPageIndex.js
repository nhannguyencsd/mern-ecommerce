import classNames from 'classnames/bind';
import styles from './ProductDetailsPage.module.scss';
import StarRating from '../../components/StarRating/StarRatingIndex';

const cx = classNames.bind(styles);

const products = [
    {
        image: require('../../assets/images/products/window-10.png'),
        title: 'Microsoft Windows 10 Pro 64-Bit Operating System Software',
    },
    {
        image: require('../../assets/images/products/samsung-s22.png'),
        title: 'Samsung Galaxy S22 Ultra 5G (128GB, 8GB) 6.8" AMOLED 2X, 108MP Camera',
    },
    {
        image: require('../../assets/images/products/window-10.png'),
        title: 'Microsoft Windows 10 Pro 64-Bit Operating System Software',
    },
];

function ProductDetailsPage() {
    return (
        <div className={cx('wrapper')}>
            <div className="grid">
                <div className="row">
                    <div className="col lg-6">
                        <div className={cx('image-cell')}>
                            <img src={products[1].image} alt="product img" />
                        </div>
                    </div>
                    <div className="col lg-6">
                        <div className={cx('product-name')}>{products[1].title}</div>
                        <div className={cx('product-rating')}>
                            <StarRating fixedValue={4} />
                            <span>8 reviews</span>
                        </div>
                        <h4 className={cx('product-price')}>$699.99</h4>
                        <p className={cx('product-description')}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus tellus eget aliquet
                            rutrum. Nunc et tellus turpis Sed neque eros, ornare at ipsum vitae, molestie dictum urna.
                            Curabitur pharetra arcu luctus sem hendrerit, a tincidunt nibh semper. Sed enim orci,
                            fermentum a eros ac, eleifend sodales sem. Maecenas pretium non metus quis dapibus. Duis
                            sagittis elementum commodo. Aliquam egestas pellentesque aliquet.
                        </p>
                    </div>
                </div>
                <div>reviews</div>
            </div>
        </div>
    );
}

export default ProductDetailsPage;
