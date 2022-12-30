import { useRef } from 'react';
import classnames from 'classnames/bind';
import styles from './ChatBox.module.scss';
import images from '../../assets/images/imagesIndex';

const cx = classnames.bind(styles);

function ChatBox() {
    const contentRef = useRef();

    //Once click on outlet add class content-control-shrink to contetRef
    const handleActive = () => {
        contentRef.current.classList.add(cx('content-control-shrink'));
    };

    return (
        <div className={cx('wrapper')}>
            <input type="checkbox" id={cx('chatbox')} />
            <label className={cx('outlet')} onClick={handleActive} htmlFor={cx('chatbox')}>
                <img className={cx('comment')} src={images.chatBubble} alt="chat icon" />
                <img className={cx('close')} src={images.close} alt="close icon" />
            </label>
            <div ref={contentRef} className={cx('content')}>
                <div className={cx('header')}>
                    <div>How can we help?</div>
                </div>
            </div>
        </div>
    );
}

export default ChatBox;
