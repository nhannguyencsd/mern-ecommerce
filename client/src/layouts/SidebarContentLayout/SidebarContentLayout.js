import classNames from 'classnames/bind';
import styles from './SidebarContentLayout.module.scss';

const cx = classNames.bind(styles);

function SidebarContentLayout({ children }) {
    return (
        <>
            <header>Header component</header>
            <main className={cx('main')}>
                <div className={cx('container')}>
                    <div>Sidebar component</div>
                    <div className={cx('page')}>{children}</div>
                </div>
            </main>
            <footer>Footer component</footer>
        </>
    );
}

export default SidebarContentLayout;
