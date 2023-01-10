import classNames from 'classnames/bind';
import styles from './ProductDetailsPage.module.scss';

const cx = classNames.bind(styles);

function ProductDetailsPage() {
    return (
        <div className={cx('wrapper')}>
            <div className="grid">
                <div className="row">
                    <div className="col lg-5">images</div>
                    <div className="col lg-7">
                        product name, price, rating, description, quantity, add to cart, Specifications,shipping, return
                        policy
                    </div>
                    <div>reviews</div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailsPage;
