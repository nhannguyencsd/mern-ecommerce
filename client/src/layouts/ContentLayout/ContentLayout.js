import classNames from 'classnames/bind';
import styles from './ContentLayout.module.scss';

const cx = classNames.bind(styles);

function ContentLayout({ children }) {
    return (
        <>
            <header>Header component</header>
            <main className={cx('main')}>
                <div className={cx('container')}>
                    <div className={cx('page')}>{children}</div>
                </div>
            </main>
            <footer>Footer component</footer>
        </>
    );
}

export default ContentLayout;
