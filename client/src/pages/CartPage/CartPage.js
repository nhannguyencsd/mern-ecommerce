import classNames from 'classnames/bind';
import styles from './CartPage.module.scss';
import CartItem from '../../components/CartItem/CartItemIndex';

const cx = classNames.bind(styles);

function CartPage() {
    return (
        <div className={cx('wrapper')}>
            <div className="grid">
                <div className="row">
                    <div className="col lg-8">
                        <h2 className={cx('headline')}>
                            Your Cart <span>(3 Items)</span>
                        </h2>
                        <CartItem />
                    </div>
                    <div className="col lg-4">
                        <h2 className={cx('headline')}>Summary</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
