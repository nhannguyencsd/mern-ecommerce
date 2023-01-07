import classNames from 'classnames/bind';
import styles from './PriceFilter.module.scss';

const cx = classNames.bind(styles);

function PriceFilter() {
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('headline')}>FILTER BY PRICE</h4>
            <input className={cx('range')} min="100" max="1000" step="10" type="range" />
            <label className={cx('amount')}>Price: $100 -$1000</label>
        </div>
    );
}

export default PriceFilter;
