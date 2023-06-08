import classNames from 'classnames/bind';
import styles from './HeaderModal.module.scss';

const cx = classNames.bind(styles);

function HeaderModal({ isOpen, onClose }) {
    // render
    return (
        <div className={isOpen ? cx('overlay') + ' ' + cx('overlay-active') : cx('overlay')} onClick={onClose}>
            <div
                className={isOpen ? cx('content') + ' ' + cx('content-active') : cx('content')}
                onClick={(event) => {
                    event.stopPropagation();
                }}
            >
                <ul>
                    <li>
                        <a href="/">
                            <span>Shop All Deals</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <span>Weekly Ads</span>
                        </a>
                    </li>
                    <li>
                        <a href="/user/orders">
                            <span>Coupons</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderModal;
