import classNames from 'classnames/bind';
import styles from './ProductListPage.module.scss';
import StarRating from '../../components/StarRating/StarRatingIndex';

const cx = classNames.bind(styles);

function ProductListPage() {
    return (
        <div className={cx('wrapper')}>
            <div className="grid">
                <div className="row">
                    <div className="col lg-3">
                        <StarRating fixedValue={5} />
                        <StarRating fixedValue={4} />
                        <StarRating fixedValue={3} />
                        <StarRating fixedValue={2} />
                        <StarRating fixedValue={1} />
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
