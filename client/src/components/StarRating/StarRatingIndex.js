import { useState, useMemo } from 'react';
import classNames from 'classnames/bind';
import styles from './StarRating.module.scss';

const cx = classNames.bind(styles);

function StarIcon({ index, rating, hoverRating, onClickRating, onHoverRating, onLeaveRating }) {
    const fill = useMemo(() => {
        //if hover on star icon
        if (hoverRating >= index) {
            return 'orange';
        }
        //if click on star icon
        if (!hoverRating && rating >= index) {
            return 'orange';
        }
        //if no rating
        return '#888';
    }, [index, rating, hoverRating]);
    return (
        <svg
            fill={fill}
            onClick={() => onClickRating(index)}
            onMouseEnter={() => onHoverRating(index)}
            onMouseLeave={() => onLeaveRating()}
            width="20px"
            height="20px"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g>
                <polygon points="8 11.43 3.67 14 4.84 9.19 1 5.97 6.05 5.57 8 1 9.95 5.57 15 5.97 11.15 9.19 12.33 14 8 11.43" />
            </g>
        </svg>
    );
}

function StarRating() {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    //handle clicking on star icon
    const onClickRating = (index) => {
        setRating(index);
    };

    //hanle hovering on star icon
    const onHoverRating = (index) => {
        setHoverRating(index);
    };

    //handle leaving on star icon
    const onLeaveRating = () => {
        setHoverRating(0);
    };

    return (
        <div className={cx('wrapper')}>
            {[1, 2, 3, 4, 5].map((index) => {
                return (
                    <StarIcon
                        key={index}
                        index={index}
                        rating={rating}
                        hoverRating={hoverRating}
                        onClickRating={onClickRating}
                        onHoverRating={onHoverRating}
                        onLeaveRating={onLeaveRating}
                    />
                );
            })}
        </div>
    );
}

export default StarRating;
