import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './AdminOrdersPage.module.scss';

const cx = classNames.bind(styles);

function AdminOrdersPage() {
    return (
        <div className={cx('wrapper')}>
            <div className="grid">
                <div className="row">
                    <div className="col lg-2">admin links</div>
                    <div className="col lg-10">
                        <h2>Admin Orders</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>User</th>
                                    <th>Date</th>
                                    <th>Total</th>
                                    <th>Delivered</th>
                                    <th>Payment method</th>
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
                                        <td>Paypal</td>
                                        <td>
                                            <Link to="/admin/order-details">go to order</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminOrdersPage;
