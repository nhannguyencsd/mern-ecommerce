import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ContentReview.module.scss';
import StarRating from '../../StarRating/StarRatingIndex';

const cx = classNames.bind(styles);

const users = [
    {
        name: 'John Doe',
        image: require('../../../assets/images/users/defaultUser.png'),
        rating: 4,
        title: 'Review title lorem ipsum dolor',
        date: '01-26-2023',
    },
    {
        name: 'John Doe',
        image: require('../../../assets/images/users/defaultUser.png'),
        rating: 5,
        title: 'Review title lorem ipsum dolor',
        date: '01-26-2023',
    },
    {
        name: 'John Doe',
        image: require('../../../assets/images/users/defaultUser.png'),
        rating: 3,
        title: 'Review title lorem ipsum dolor',
        date: '01-26-2023',
    },
    {
        name: 'John Doe',
        image: require('../../../assets/images/users/defaultUser.png'),
        rating: 3,
        title: 'Review title lorem ipsum dolor',
        date: '01-26-2023',
    },
    {
        name: 'John Doe',
        image: require('../../../assets/images/users/defaultUser.png'),
        rating: 5,
        title: 'Review title lorem ipsum dolor',
        date: '01-26-2023',
    },
    {
        name: 'John Doe',
        image: require('../../../assets/images/users/defaultUser.png'),
        rating: 5,
        title: 'Review title lorem ipsum dolor',
        date: '01-26-2023',
    },
];

function ContentReview() {
    return (
        <div className={cx('wrapper')}>
            {users.map((user, index) => {
                return (
                    <div className={cx('review-cell')} key={index}>
                        <Link className={cx('user-info')} key={index} to="/">
                            <img src={user.image} alt="user avatar" />
                            <span>{user.name}</span>
                        </Link>
                        <div className={cx('overall-rating')}>
                            <StarRating fixedValue={user.rating} />
                            <h3>{user.title}</h3>
                        </div>
                        <div className={cx('review-date')}>Reviewed on {user.date}</div>
                        <div className={cx('review-txt')}>
                            Customer reiview lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam beatae
                            odit repellendus delectus corrupti numquam quae atque quis earum minus rem neque et, nihil
                            eum commodi dolores maiores harum consequuntur.
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default ContentReview;
