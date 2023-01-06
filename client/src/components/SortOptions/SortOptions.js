import classNames from 'classnames/bind';
import styles from './SortOptions.module.scss';

const cx = classNames.bind(styles);

function SortOptions() {
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('headline')}>SORT BY:</h4>
            <select className={cx('options')}>
                <option value="price_1">Price Low to High</option>
                <option value="price_-1">Price High to Low</option>
                <option value="rating_-1">Customer Rating</option>
                <option value="name_1"> Name A-Z</option>
                <option value="name_-1">Name Z-A</option>
            </select>
        </div>
    );
}

export default SortOptions;
