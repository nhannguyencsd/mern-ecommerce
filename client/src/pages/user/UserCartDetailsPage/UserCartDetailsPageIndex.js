import classNames from 'classnames/bind';
import styles from './UserCartDetailsPage.module.scss';
import CartItem from '../../../components/CartItem/CartItemIndex';

const cx = classNames.bind(styles);

const items = [
    {
        image: require('../../../assets/images/products/samsung-s22.png'),
        name: 'Samsung Galaxy S22 Ultra 5G',
        options: {
            Capacity: '128 GB',
            Display: 'AMOLED 2X',
            Color: 'Light Purple',
        },
    },
    {
        image: require('../../../assets/images/products/window-10.png'),
        name: 'Microsoft Windows 10 Pro',
        options: {
            'Operating System': 'Window',
            Version: 'Pro',
            Type: '64 Bits',
        },
    },
    {
        image: require('../../../assets/images/products/samsung-s22.png'),
        name: 'Samsung Galaxy S22 Ultra 5G',
        options: {
            Capacity: '256 GB',
            Display: 'AMOLED 2X',
            Color: 'Light Purple',
        },
    },
];

function UserCartDetailsPage() {
    return (
        <div className={cx('wrapper')}>
            <h1>Cart Details</h1>
            <div className="grid">
                <div className="row">
                    <div className="col lg-8">
                        <div className="row">
                            <div className="col lg-6">
                                <h2>Shipping</h2>
                                <b>Name</b>: John Doe <br />
                                <b>Address</b>: 1234 Sunflower Dr, Houston, TX 77012 <br />
                                <b>Phone</b>: 123 456 789
                            </div>
                            <div className="col lg-6">
                                <h2>Payment method</h2>
                                <select>
                                    <option value="pp">PayPal</option>
                                    <option value="cod">Cash On Delivery (delivery may be delayed)</option>
                                </select>
                            </div>
                            <div className="col lg-6">
                                <div className={cx('shipping-status')}>
                                    Not delivered. In order to make order, fill out your profile with correct address,
                                    city, etc
                                </div>
                            </div>
                            <div className="col lg-6">
                                <div className={cx('payment-status')}>Not paid yet</div>
                            </div>
                        </div>
                        <h2>Orders items</h2>
                        <div className={cx('item-list')}>
                            {items.map((item, index) => (
                                <CartItem item={item} key={index}></CartItem>
                            ))}
                        </div>
                    </div>
                    <div className="col lg-4">
                        <div>
                            <h2>Order summary</h2>
                            <div>
                                Items price (after tax): <span>$900</span>
                            </div>
                            <div>
                                Shipping: <span>included</span>
                            </div>
                            <div>
                                Tax: <span>$7.89</span>
                            </div>
                            <div>
                                Total Price: <span>$907.89</span>
                            </div>
                            <button type="button" className={cx('pay')}>
                                Pay for the order{' '}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserCartDetailsPage;
