import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './UserOrdersPage.module.scss';

const cx = classNames.bind(styles);

function UserOrdersPage() {
    return (
        <div className={cx('wrapper')}>
            <h2>My Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Delivered</th>
                        <th>Order details</th>
                    </tr>
                </thead>
                <tbody>
                    {['Icon Yes', 'Icon No'].map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>John Doe</td>
                            <td>06-08-2023</td>
                            <td>$150</td>
                            <td>{item}</td>
                            <td>
                                <Link to="/user/order-details">go to order</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserOrdersPage;
