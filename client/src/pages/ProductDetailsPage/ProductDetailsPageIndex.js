import classNames from 'classnames/bind';
import styles from './ProductDetailsPage.module.scss';

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
                    <div className="col lg-5">
                        <div className={cx('image-cell')}>
                            <img src={products[1].image} alt="product img" />
                        </div>
                    </div>

                    <div className="col lg-7">
                        product name, price, rating, description, quantity, add to cart, Specifications,shipping, return
                        policy
                    </div>
                </div>
                <div>reviews</div>
            </div>
        </div>
    );
}

export default ProductDetailsPage;
