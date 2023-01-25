import classNames from 'classnames/bind';
import styles from './CustomerReviews.module.scss';
import StarRating from '../StarRating/StarRatingIndex';
import WriteReview from './WriteReview/WriteReviewIndex';
import ContentReview from './ContentReview/ContentReviewIndex';

const cx = classNames.bind(styles);

function CustomerReviews() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('headline')}>Customer reviews</h2>
            <div className={cx('rating-value-cell')}>
                <StarRating fixedValue={4} />
                <span className={cx('rating-value')}>4.2 out of 5</span>
            </div>
            <div className={cx('rating-count')}>Based on 18 Reviews</div>
            <WriteReview />
            <ContentReview />
        </div>
    );
}

export default CustomerReviews;
