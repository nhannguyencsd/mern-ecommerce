import classNames from 'classnames/bind';
import { useState, useRef } from 'react';
import styles from './CartSummary.module.scss';

const cx = classNames.bind(styles);

function CartSummary() {
    const [isActive, setIsActive] = useState(false);
    const contentRef = useRef();

    const handleTogglePromtionCode = () => {
        setIsActive(!isActive);
        if (isActive) contentRef.current.style.display = 'none';
        else contentRef.current.style.display = 'flex';
    };

    return (
        <div className={cx('wrapper')}>
            {/* headline */}
            <h2 className={cx('headline')}>Order Summary</h2>
            {/* sub price list */}
            <div className={cx('sub-price-list')}>
                <div className={cx('sub-price')}>
                    Item(s):<span>$9999.99</span>
                </div>
                <div className={cx('sub-price')}>
                    Est. Delivery:<span>$0.00</span>
                </div>
            </div>
            {/* promotion code */}
            <div className={cx('promotion-code')}>
                <div
                    className={
                        isActive === true
                            ? cx('promotion-code-greeting', 'promotion-code-greeting-is-active')
                            : cx('promotion-code-greeting')
                    }
                    onClick={handleTogglePromtionCode}
                >
                    Enter Promotion Code
                    <div className={cx('promotion-code-icon')}></div>
                </div>
                <div className={cx('promotion-code-content')} ref={contentRef}>
                    <input type="text" />
                    <button>APPLY</button>
                </div>
            </div>
            {/* checkout */}
            <div className={cx('checkout')}>
                <div className={cx('total-price')}>
                    Est. Total: <span>$9999.99</span>
                </div>
                <button className={cx('btn-checkout')}>SECURE CHECKOUT</button>
                <div className={cx('btn-divider')}>OR</div>
                <button className={cx('btn-paypal-checkout')}>
                    <img src={require('../../assets/images/brands/paypal.png')} alt="PayPal Checkout"></img>
                    <span class="paypal-button-text true" optional="" data-v-44bf4aee="">
                        Checkout
                    </span>
                </button>
            </div>
        </div>
    );
}

export default CartSummary;
