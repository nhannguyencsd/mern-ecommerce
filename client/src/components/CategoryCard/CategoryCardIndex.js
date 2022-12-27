import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './CategoryCard.module.scss';

const cx = classNames.bind(styles);

function CategoryCard({ card, insertClassName }) {
    return (
        <div className={cx('wrapper') + insertClassName}>
            <Link className={cx('content')} to="/">
                <div className={cx('image-cell')}>
                    <img src={card.image} alt="card" />
                </div>
                <div className={cx('title')}>{card.title}</div>
            </Link>
        </div>
    );
}

export default CategoryCard;
