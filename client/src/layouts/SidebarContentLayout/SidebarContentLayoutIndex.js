import classNames from 'classnames/bind';
import styles from './SidebarContentLayout.module.scss';
import Header from '../../components/Header/HeaderIndex';
import Footer from '../../components/Footer/FooterIndex';

const cx = classNames.bind(styles);

function SidebarContentLayout({ children }) {
    return (
        <>
            <Header badge="3" />
            <main className={cx('main')}>
                <div className={cx('container')}>
                    <div>Sidebar component</div>
                    <div className={cx('page')}>{children}</div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default SidebarContentLayout;
