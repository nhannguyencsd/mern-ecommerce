import classNames from 'classnames/bind';
import styles from './ProductListPage.module.scss';
import StarRatingFilter from '../../components/StarRatingFilter/StarRatingFilterIndex';
import SortOptions from '../../components/SortOptions/SortOptions';
import PriceFilter from '../../components/PriceFilter/PriceFilterIndex';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilterIndex';
import AttributesFilter from '../../components/AttributesFilter/AttributesFilterIndex';

const cx = classNames.bind(styles);

function ProductListPage() {
    return (
        <div className={cx('wrapper')}>
            <div className="grid">
                <div className="row">
                    <div className="col lg-3 sm-3">
                        <div className={cx('filter-item')}>
                            <PriceFilter />
                        </div>
                        <div className={cx('filter-item')}>
                            <CategoryFilter />
                        </div>
                        <div className={cx('filter-item')}>
                            <AttributesFilter />
                        </div>
                        <div className={cx('filter-item')}>
                            <StarRatingFilter />
                        </div>
                    </div>
                    <div className="col lg-9">
                        <SortOptions />
                        <div className="row">
                            <div className="col lg-4">product card component</div>
                            <div className="col lg-4">product card component</div>
                            <div className="col lg-4">product card component</div>
                            <div className="col lg-4">product card component</div>
                        </div>
                    </div>
                </div>
                <div>pagination component</div>
            </div>
        </div>
    );
}
export default ProductListPage;
