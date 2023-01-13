import { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './AddToCart.module.scss';

const cx = classNames.bind(styles);

function AddToCart() {
    const [itemCount, setItemCount] = useState(0);
    const addRef = useRef();
    const subtractRef = useRef();

    // add item
    const handleAddItem = () => {
        addRef.current.style.display = 'block';
        subtractRef.current.style.display = 'inline-flex';
        setItemCount(itemCount + 1);
    };

    // subtract item
    const handleSubtractItem = () => {
        if (itemCount === 1) {
            addRef.current.style.display = 'none';
            subtractRef.current.style.display = 'none';
        }
        if (itemCount > 0) setItemCount(itemCount - 1);
    };

    return (
        <div className={cx('wrapper')}>
            <button className={cx('add-btn')} onClick={handleAddItem}>
                <span>{itemCount === 0 ? 'Add to cart' : `${itemCount} added`}</span>
                <div className={cx('add-sign')} ref={addRef}>
                    +
                </div>
            </button>
            <button className={cx('subtract-btn')} ref={subtractRef} onClick={handleSubtractItem}>
                -
            </button>
        </div>
    );
}

export default AddToCart;
