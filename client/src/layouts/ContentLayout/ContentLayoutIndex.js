import classNames from 'classnames/bind';
import styles from './ContentLayout.module.scss';
import Header from '../../components/Header/HeaderIndex';

const cx = classNames.bind(styles);

function ContentLayout({ children }) {
    return (
        <>
            <Header badge="3" />
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