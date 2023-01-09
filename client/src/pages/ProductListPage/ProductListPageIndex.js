import classNames from 'classnames/bind';
import styles from './ProductListPage.module.scss';
import StarRatingFilter from '../../components/StarRatingFilter/StarRatingFilterIndex';
import SortOptions from '../../components/SortOptions/SortOptions';
import PriceFilter from '../../components/PriceFilter/PriceFilterIndex';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilterIndex';
import AttributesFilter from '../../components/AttributesFilter/AttributesFilterIndex';
import ProductCard from '../../components/ProductCard/ProductCardIndex';

const cx = classNames.bind(styles);

const products = [
    {
        image: require('../../assets/images/products/window-10.png'),
        title: 'Microsoft Windows 10 Pro 64-Bit Operating System Software',
    },
    {
        image: require('../../assets/images/products/samsung-s22.png'),
        title: 'Samsung Galaxy S22 Ultra 5G (128GB, 8GB) 6.8" AMOLED 2X, 108MP Camera',
    },
    {
        image: require('../../assets/images/products/window-10.png'),
        title: 'Microsoft Windows 10 Pro 64-Bit Operating System Software',
    },
    {
        image: require('../../assets/images/products/samsung-s22.png'),
        title: 'Samsung Galaxy S22 Ultra 5G (128GB, 8GB) 6.8" AMOLED 2X, 108MP Camera',
    },
    {
        image: require('../../assets/images/products/window-10.png'),
        title: 'Microsoft Windows 10 Pro 64-Bit Operating System Software',
    },
    {
        image: require('../../assets/images/products/samsung-s22.png'),
        title: 'Samsung Galaxy S22 Ultra 5G (128GB, 8GB) 6.8" AMOLED 2X, 108MP Camera',
    },
    {
        image: require('../../assets/images/products/window-10.png'),
        title: 'Microsoft Windows 10 Pro 64-Bit Operating System Software',
    },
    {
        image: require('../../assets/images/products/samsung-s22.png'),
        title: 'Samsung Galaxy S22 Ultra 5G (128GB, 8GB) 6.8" AMOLED 2X, 108MP Camera',
    },
];

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
                        <div className={cx('filter-item')}>
                            <button type="button" className={cx('btn-filter')}>
                                Filter
                            </button>
                            <button type="button" className={cx('btn-reset-filter')}>
                                Reset Filter
                            </button>
                        </div>
                    </div>
                    <div className="col lg-9">
                        <SortOptions />
                        <div className="row">
                            {products.map((product, index) => {
                                return (
                                    <div key={index} className="col lg-3">
                                        <ProductCard card={product} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div>pagination component</div>
            </div>
        </div>
    );
}
export default ProductListPage;
