import classNames from 'classnames/bind';
import styles from './CartPage.module.scss';
import CartItem from '../../components/CartItem/CartItemIndex';
import CartSummary from '../../components/CartSummary/CartSummaryIndex';

const cx = classNames.bind(styles);

const items = [
    {
        image: require('../../assets/images/products/samsung-s22.png'),
        name: 'Samsung Galaxy S22 Ultra 5G',
        options: {
            Capacity: '128 GB',
            Display: 'AMOLED 2X',
            Color: 'Light Purple',
        },
    },
    {
        image: require('../../assets/images/products/window-10.png'),
        name: 'Microsoft Windows 10 Pro',
        options: {
            'Operating System': 'Window',
            Version: 'Pro',
            Type: '64 Bits',
        },
    },
    {
        image: require('../../assets/images/products/samsung-s22.png'),
        name: 'Samsung Galaxy S22 Ultra 5G',
        options: {
            Capacity: '256 GB',
            Display: 'AMOLED 2X',
            Color: 'Light Purple',
        },
    },
];

function CartPage() {
    return (
        <div className={cx('wrapper')}>
            <div className="grid">
                <div className="row">
                    {/* cart items */}
                    <div className="col lg-8 md-12 sm-12">
                        <h2 className={cx('headline')}>
                            Your Cart <span>(3 Items)</span>
                        </h2>
                        {items.map((item, index) => {
                            return <CartItem item={item} key={index} />;
                        })}
                    </div>
                    {/* cart summary */}
                    <div className="col lg-4 md-12 sm-12">
                        <CartSummary />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
