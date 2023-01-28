import classNames from 'classnames/bind';
import styles from './CartItem.module.scss';

const cx = classNames.bind(styles);

function CartItem() {
    return (
        <div className={cx('wrapper')}>
            <div>Cart Item</div>
        </div>
    );
}

export default CartItem;
