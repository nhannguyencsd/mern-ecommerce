import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <p>Working in progress to built a header component </p>
        </header>
    );
}

export default Header;
