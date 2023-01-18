import { useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './ProductHeadline.module.scss';

const cx = classNames.bind(styles);

function ProductHeadline({ headlineIcon, headline, content }) {
    const contentRef = useRef();
    const expandIconRef = useRef();

    const handleCollapsible = () => {
        console.log(contentRef.current.style.maxHeight);
        if (contentRef.current.style.maxHeight) {
            contentRef.current.style.maxHeight = null;
            expandIconRef.current.style.transform = 'rotate(0)';
            contentRef.current.style.marginBottom = 0;
        } else {
            contentRef.current.style.maxHeight = contentRef.current.scrollHeight + 'px';
            expandIconRef.current.style.transform = 'rotate(180deg)';
            contentRef.current.style.marginBottom = '16px';
        }
    };
    return (
        <div className={cx('wrapper')}>
            <button className={cx('collapsible')} onClick={handleCollapsible}>
                {headlineIcon}
                <h3>{headline}</h3>
                <svg
                    className={cx('expand-icon')}
                    ref={expandIconRef}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="12px"
                    height="12px"
                >
                    <path d="M1.65 4.24C1.232 3.882.6 3.93.24 4.35c-.359.419-.31 1.05.11 1.41l7 6c.374.32.926.32 1.3 0l7-6c.42-.36.469-.991.11-1.41-.36-.42-.992-.469-1.41-.11L8 9.684 1.65 4.24z" />
                </svg>
            </button>

            <div className={cx('content')} ref={contentRef}>
                {content}
            </div>
        </div>
    );
}

export default ProductHeadline;
