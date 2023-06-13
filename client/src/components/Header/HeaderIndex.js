import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../assets/images/imagesIndex';
import Button from '../Button/ButtonIndex';
import SideModal from '../Modal/SideModal/SideModalIndex';
import HeaderModal from '../Modal/HeaderModal/HeaderModalIndex';

const cx = classNames.bind(styles);

function Header({ badge }) {
    // hook
    const [openSideModal, setOpenSideModal] = useState(false);
    const [openHeaderModal, setOpenHeaderModal] = useState(false);

    useEffect(() => {
        function handleResize() {
            setOpenHeaderModal(false);
        }

        window.addEventListener('resize', handleResize);
    });

    // render
    return (
        <header className={cx('wrapper')}>
            <div className="grid">
                <div className={cx('container')}>
                    {/* logo */}
                    <Button className={cx('logo')} to="/" leftIcon={images.logo}>
                        <span className={cx('tagline')}>Techmart</span>
                    </Button>
                    {/* left links */}
                    <div className={cx('links')}>
                        <Button to="departments" rightIcon={images.caretDown} rounded>
                            Departments
                        </Button>
                        <Button to="services" rightIcon={images.caretDown} rounded>
                            Services
                        </Button>
                        <Button
                            to=""
                            rightIcon={images.caretDown}
                            rounded
                            onClick={(event) => {
                                setOpenSideModal(false);
                                setOpenHeaderModal(!openHeaderModal);
                            }}
                        >
                            Deals
                        </Button>
                        <HeaderModal
                            isOpen={openHeaderModal}
                            onClose={() => {
                                document.documentElement.style = '';
                                setOpenHeaderModal(false);
                            }}
                        />
                    </div>
                    {/* search */}
                    <form className={cx('search')} action="">
                        <input type="text" placeholder="Search" spellCheck={false} />
                        <Button className={cx('clear-btn')} leftIcon={images.close}></Button>
                        <Button className={cx('search-btn')} leftIcon={images.search} type="submit"></Button>
                    </form>
                    {/* right links */}
                    <div className={cx('links')}>
                        <Link to="/admin/orders">Admin</Link>
                        <div className={cx('menu')}>
                            <Link to="/">John Doe</Link>
                            <ul className={cx('submenu')}>
                                <li className={cx('submenu-item')}>
                                    <Link to="/user/my-orders">My orders</Link>
                                </li>
                                <li className={cx('submenu-item')}>
                                    <Link to="/">My profiles</Link>
                                </li>
                                <li className={cx('submenu-item')}>
                                    <Link to="/">Logout</Link>
                                </li>
                            </ul>
                        </div>

                        <Button
                            leftIcon={images.user}
                            rightIcon={images.caretDown}
                            rounded
                            onClick={() => {
                                document.documentElement.style.overflow = 'hidden';
                                setOpenHeaderModal(false);
                                setOpenSideModal(true);
                            }}
                        >
                            Sign In
                        </Button>
                        <SideModal
                            isOpen={openSideModal}
                            onClose={() => {
                                document.documentElement.style = '';
                                setOpenSideModal(false);
                            }}
                        />
                        <Button to="/cart" leftIcon={images.cart} rounded badge={badge}></Button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
