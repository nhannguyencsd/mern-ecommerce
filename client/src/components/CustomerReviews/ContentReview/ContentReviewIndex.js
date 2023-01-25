import classNames from 'classnames/bind';
import styles from './ContentReview.module.scss';

const cx = classNames.bind(styles);

function ContentReview() {
    return (
        <div className={cx('wrapper')}>
            <div>content review</div>
        </div>
    );
}

export default ContentReview;
