import classNames from 'classnames/bind';
import styles from './AdminLayout.module.scss';
import Header from '../../components/Header/Header';

const cx = classNames.bind(styles);

function AdminLayout({ children }) {
    return (
        <>
            <Header />
            <main className={cx('main')}>
                <div className={cx('container')}>
                    <div>Admin navabar component</div>
                    <div className={cx('page')}>{children}</div>
                </div>
            </main>
            <footer>Footer component</footer>
        </>
    );
}

export default AdminLayout;
