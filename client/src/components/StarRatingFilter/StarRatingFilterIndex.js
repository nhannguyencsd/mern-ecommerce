import classNames from 'classnames/bind';
import styles from './StarRatingFilter.module.scss';
import StarRating from '../../components/StarRating/StarRatingIndex';

const cx = classNames.bind(styles);

function StarRatingFilter() {
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('headline')}>RATING</h4>
            {[0, 1, 2, 3, 4].map((index) => {
                return (
                    <div className={cx('item')} key={index}>
                        <input type="checkbox" id={index} />
                        <label htmlFor={index}>
                            <StarRating fixedValue={5 - index} />
                        </label>
                    </div>
                );
            })}
        </div>
    );
}

export default StarRatingFilter;
