import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import images from '../../assets/images/imagesIndex';
import Button from '../Button/ButtonIndex';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Footer() {
    console.log(styles);
    return (
        <footer className={cx('wrapper')}>
            <div className="grid">
                <div className="row">
                    <div className={cx('section') + ' col lg-3'}>
                        <Button className={cx('logo')} to="/" leftIcon={images.logo}>
                            <span className={cx('tagline')}>TECHMART</span>
                        </Button>
                        <ul className={cx('list')}>
                            <li>
                                <Link to="/">About Techmart</Link>
                            </li>
                            <li>
                                <Link to="/">Discover & Learn</Link>
                            </li>
                            <li>
                                <Link to="/">Carrers</Link>
                            </li>
                            <li>
                                <Link to="/">Terms of Use</Link>
                            </li>
                            <li>
                                <Link to="/">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('section') + ' col lg-3'}>
                        <h2 className={cx('heading')}>SHOP & SAVE</h2>
                        <ul className={cx('list')}>
                            <li>
                                <Link to="/">Computers & Tablets</Link>
                            </li>
                            <li>
                                <Link to="/">Phones</Link>
                            </li>
                            <li>
                                <Link to="/">TV & Home</Link>
                            </li>
                            <li>
                                <Link to="/">Cameras</Link>
                            </li>
                            <li>
                                <Link to="/">Software</Link>
                            </li>

                            <li>
                                <Link to="/">Shop All</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('section') + ' col lg-3'}>
                        <h2 className={cx('heading')}>MY ACCOUNT</h2>
                        <ul className={cx('list')}>
                            <li>
                                <Link to="/">Login & Register</Link>
                            </li>
                            <li>
                                <Link to="/">Rewards & Membership</Link>
                            </li>
                            <li>
                                <Link to="/">Orders Status</Link>
                            </li>
                            <li>
                                <Link to="/">Shipping, Delivery & Pickup</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('section') + ' col lg-3'}>
                        <h2 className={cx('heading')}>SERVICES & SUPPORTS</h2>
                        <ul className={cx('list')}>
                            <li>
                                <Link to="/">Techmart Care</Link>
                            </li>
                            <li>
                                <Link to="/">Protection & Support Plans</Link>
                            </li>
                            <li>
                                <Link to="/">Help Center</Link>
                            </li>
                            <li>
                                <Link to="/">Returns & Exchanges</Link>
                            </li>
                            <li>
                                <Link to="/">Feedback</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cx('copyright')}>Copyright © 2022 techmart. All rights reserved.</div>
            </div>
        </footer>
    );
}

export default Footer;
