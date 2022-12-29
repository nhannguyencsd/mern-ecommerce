import classNames from 'classnames/bind';
import styles from './SidebarContentLayout.module.scss';
import Header from '../../components/Header/HeaderIndex';
import ChatBox from '../../components/ChatBox/ChatBoxIndex';
import Footer from '../../components/Footer/FooterIndex';

const cx = classNames.bind(styles);

function SidebarContentLayout({ children }) {
    return (
        <>
            <Header badge="3" />
            <main className={cx('main')}>
                <div className={cx('content')}>
                    <div>Sidebar component</div>
                    <div className={cx('page')}>
                        {children}
                        <ChatBox />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default SidebarContentLayout;
