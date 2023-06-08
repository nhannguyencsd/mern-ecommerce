import classNames from 'classnames/bind';
import styles from './SideModal.module.scss';

const cx = classNames.bind(styles);

function SideModal({ isOpen, onClose }) {
    // render
    return (
        <div className={isOpen ? cx('overlay') + ' ' + cx('overlay-active') : cx('overlay')} onClick={onClose}>
            <div
                className={isOpen ? cx('content') + ' ' + cx('content-active') : cx('content')}
                onClick={(event) => {
                    event.stopPropagation();
                }}
            >
                <button onClick={onClose}>X</button>
                <h2>Account</h2>
                <ul>
                    <li>
                        <a href="/login">
                            <span>Sign in</span>
                        </a>
                    </li>
                    <li>
                        <a href="/register">
                            <span>Create Account</span>
                        </a>
                    </li>
                    <li>
                        <a href="/user/orders">
                            <span>Orders</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SideModal;
