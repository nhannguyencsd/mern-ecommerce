import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Pagination.module.scss';

const cx = classNames.bind(styles);

function Pagination() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('link-cell')}>
                <Link className={cx('link', 'previous-link')} to="/">
                    ‹
                </Link>
            </div>
            <div className={cx('link-cell')}>
                <Link className={cx('link')} to="/">
                    1
                </Link>
            </div>
            <div className={cx('link-cell')}>
                <Link className={cx('link')} to="/">
                    2
                </Link>
            </div>
            <div className={cx('link-cell')}>
                <Link className={cx('link')} to="/">
                    3
                </Link>
            </div>
            <div className={cx('link-cell')}>
                <Link className={cx('link')} to="/">
                    4
                </Link>
            </div>
            <div className={cx('link-cell')}>
                <Link className={cx('link')} to="/">
                    5
                </Link>
            </div>
            <div className={cx('link-cell')}>
                <Link className={cx('link', 'next-link')} to="/">
                    ›
                </Link>
            </div>
        </div>
    );
}

export default Pagination;
