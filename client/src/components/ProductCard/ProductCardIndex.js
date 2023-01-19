import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ProductCard.module.scss';
import StarRating from '../StarRating/StarRatingIndex';
import AddToCart from '../AddToCart/AddToCartIndex';

const cx = classNames.bind(styles);

function ProductCard({ card }) {
    return (
        <div className={cx('wrapper')}>
            <Link to="/product-details">
                <div className={cx('image-cell')}>
                    <img src={card.image} alt="product img" />
                </div>
                <div className={cx('headline')}>
                    <span className={cx('price')}>$0.00+</span>
                    <StarRating fixedValue={4} />
                </div>
                <div className={cx('title')}>{card.title}</div>
            </Link>
            <AddToCart />
        </div>
    );
}

export default ProductCard;
