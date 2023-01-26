import { useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './WriteReview.module.scss';
import StarRating from '../../StarRating/StarRatingIndex';

const cx = classNames.bind(styles);

function WriteReview() {
    const collapsibleRef = useRef();
    const cancelBtnRef = useRef();

    // handle collapsible writting review form
    const handleCollapsible = () => {
        if (collapsibleRef.current.style.maxHeight) {
            collapsibleRef.current.style.maxHeight = null;
        } else {
            collapsibleRef.current.style.maxHeight = collapsibleRef.current.scrollHeight + 'px';
        }
    };

    // close writting review form
    const handleCancelWriteReview = (e) => {
        e.preventDefault();
        collapsibleRef.current.style.maxHeight = null;
    };

    return (
        <div className={cx('wrapper')}>
            <button className={cx('review-btn')} onClick={handleCollapsible}>
                WRITE A REVIEW
            </button>
            <div className={cx('collapsible')} ref={collapsibleRef}>
                <form className={cx('review-frm')} action="">
                    {/* review rating */}
                    <label className={cx('rating-lbl')}>How would you rate our product?</label>
                    <StarRating />
                    {/* review title */}
                    <label htmlFor="review-title-lbl" className={cx('review-title-lbl')}>
                        Title of Review
                    </label>
                    <input className={cx('review-title-txt')} id="review-title-lbl" required></input>
                    {/* review body */}
                    <label htmlFor="review-body-lbl" className={cx('review-body-lbl')}>
                        How was your overall experience?
                    </label>
                    <textarea className={cx('review-body-txt')} id="review-body-lbl" rows={8} required></textarea>
                    {/* review buttons */}
                    <div className={cx('btn-cell')}>
                        <button className={cx('cancel-btn')} ref={cancelBtnRef} onClick={handleCancelWriteReview}>
                            CANCEL
                        </button>
                        <button className={cx('post-btn')}>POST REVIEW</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default WriteReview;
