import classNames from 'classnames/bind';
import styles from './ContentLayout.module.scss';
import Header from '../../components/Header/HeaderIndex';
import Footer from '../../components/Footer/FooterIndex';

const cx = classNames.bind(styles);

function ContentLayout({ children }) {
    return (
        <>
            <Header badge="3" />
            <main className={cx('page')}>{children}</main>
            <Footer />
        </>
    );
}

export default ContentLayout;
