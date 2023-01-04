import classNames from 'classnames/bind';
import styles from './ProductListPage.module.scss';
import StarRatingFilter from '../../components/StarRatingFilter/StarRatingFilterIndex';

const cx = classNames.bind(styles);

function ProductListPage() {
    return (
        <div className={cx('wrapper')}>
            <div className="grid">
                <div className="row">
                    <div className="col lg-3 sm-3">
                        <StarRatingFilter />
                        <div>filter component</div>
                        <div>filter component</div>
                    </div>
                    <div className="col lg-9">
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
