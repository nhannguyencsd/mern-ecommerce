import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../assets/images/imagesIndex';
import Button from '../Button/ButtonIndex';

const cx = classNames.bind(styles);

function Header({ badge }) {
    return (
        <header className={cx('wrapper')}>
            <div className="grid">
                <div className={cx('container')}>
                    {/* logo */}
                    <Button className={cx('logo')} to="/" leftIcon={images.logo}>
                        <span className={cx('tagline')}>techmart</span>
                    </Button>
                    {/* left links */}
                    <div className={cx('links')}>
                        <Button to="departments" rightIcon={images.caretDown} rounded>
                            Departments
                        </Button>
                        <Button to="services" rightIcon={images.caretDown} rounded>
                            Services
                        </Button>
                        <Button to="deals" rightIcon={images.caretDown} rounded>
                            Deals
                        </Button>
                    </div>
                    {/* search */}
                    <form className={cx('search')} action="">
                        <input type="text" placeholder="Search" spellCheck={false} />
                        <Button className={cx('clear-btn')} leftIcon={images.close}></Button>
                        <Button className={cx('search-btn')} leftIcon={images.search} type="submit"></Button>
                    </form>
                    {/* right links */}
                    <div className={cx('links')}>
                        <Button to="/login" leftIcon={images.user} rightIcon={images.caretDown} rounded>
                            Sign In
                        </Button>
                        <Button to="/cart" leftIcon={images.cart} rounded badge={badge}></Button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
