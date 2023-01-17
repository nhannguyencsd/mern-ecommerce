import classNames from 'classnames/bind';
import styles from './ProductDetailsPage.module.scss';
import StarRating from '../../components/StarRating/StarRatingIndex';
import AddToCart from '../../components/AddToCart/AddToCartIndex';
import ProductHeadline from '../../components/ProductHeadline/ProductHeadlineIndex';
import ProductGallery from '../../components/ProductGallery/ProductGalleryIndex';

const cx = classNames.bind(styles);

const productImages = [
    {
        src: require('../../assets/images/products/samsung-s22.png'),
        title: 'Samsung Galaxy S22 Ultra 5G (128GB, 8GB) 6.8" AMOLED 2X, 108MP Camera',
    },
    {
        src: require('../../assets/images/products/samsung-s22b.jpg'),
        title: 'Samsung Galaxy S22 Ultra 5G (128GB, 8GB) 6.8" AMOLED 2X, 108MP Camera',
    },
    {
        src: require('../../assets/images/products/samsung-s22c.png'),
        title: 'Samsung Galaxy S22 Ultra 5G (128GB, 8GB) 6.8" AMOLED 2X, 108MP Camera',
    },
];

function ProductDetailsPage() {
    return (
        <div className={cx('wrapper')}>
            <div className="grid">
                <div className="row">
                    {/* product gallery */}
                    <div className="col lg-6">
                        <ProductGallery images={productImages} />
                    </div>
                    {/* product info */}
                    <div className="col lg-6">
                        <div className={cx('info')}>
                            <div className={cx('product-name')}>{productImages[0].title}</div>
                            <div className={cx('product-rating')}>
                                <StarRating fixedValue={4} />
                                <span>8 reviews</span>
                            </div>
                            <h4 className={cx('product-price')}>$699.99</h4>
                            <p className={cx('product-description')}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus tellus eget aliquet
                                rutrum. Nunc et tellus turpis Sed neque eros, ornare at ipsum vitae, molestie dictum
                                urna. Curabitur pharetra arcu luctus sem hendrerit, a tincidunt nibh semper. Sed enim
                                orci, fermentum a eros ac, eleifend sodales sem. Maecenas pretium non metus quis
                                dapibus. Duis sagittis elementum commodo. Aliquam egestas pellentesque aliquet.
                            </p>
                            <AddToCart />
                            <ProductHeadline />
                        </div>
                    </div>
                </div>
                <div>reviews</div>
            </div>
        </div>
    );
}

export default ProductDetailsPage;
