import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './CartItem.module.scss';

const cx = classNames.bind(styles);

function CartItem({ item }) {
    return (
        <div className={cx('wrapper')}>
            {/* item information */}
            <div className={cx('info-cell')}>
                {/* item image */}
                <Link className={cx('info-image')} to="/product-details">
                    <img src={item.image} alt="product img" />
                </Link>
                <div className={cx('info-txt')}>
                    <Link className={cx('info-txt-title')} to="/product-details">
                        {item.name}
                    </Link>
                    {/* options information */}
                    <ul className={cx('info-txt-options')}>
                        {/* convert object -> array -> li */}
                        {Object.entries(item.options).map((option, index) => {
                            return (
                                <li key={index}>
                                    {option[0]}:<strong>{option[1]}</strong>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            {/* item value */}
            <div className={cx('value')}>
                <div className={cx('price')}>$9999.99</div>
                <input className={cx('quantity')} type="text" maxLength={2} />
                <button className={cx('btn-remove')}>
                    <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g strokeWidth="0"></g>
                        <g strokeLinecap="round" strokeLinejoin="round"></g>
                        <g>
                            {' '}
                            <path
                                d="M3 6H21M5 6V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V6M8 6V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V6"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>{' '}
                            <path
                                d="M14 11V17"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>{' '}
                            <path
                                d="M10 11V17"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>{' '}
                        </g>
                    </svg>
                    REMOVE
                </button>
            </div>
        </div>
    );
}

export default CartItem;
