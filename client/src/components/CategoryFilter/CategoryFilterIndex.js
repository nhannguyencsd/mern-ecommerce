import classNames from 'classnames/bind';
import styles from './CategoryFilter.module.scss';

const cx = classNames.bind(styles);

function CategoryFilter() {
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('headline')}>CATEGORY</h4>
            {Array.from({ length: 5 }).map((_, index) => {
                return (
                    <div className={cx('option')} key={index}>
                        <label htmlFor={`category-${index}`}>{`category-${index}`}</label>
                        <input key={index} id={`category-${index}`} type="checkbox" />
                    </div>
                );
            })}
        </div>
    );
}

export default CategoryFilter;
