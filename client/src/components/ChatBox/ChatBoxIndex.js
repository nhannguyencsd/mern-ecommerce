import { useRef } from 'react';
import classnames from 'classnames/bind';
import styles from './ChatBox.module.scss';
import images from '../../assets/images/imagesIndex';

const cx = classnames.bind(styles);

function ChatBox() {
    const contentRef = useRef();
    const textAreaRef = useRef();

    //Once click on outlet add class content-control-shrink to contetRef
    const handleActive = () => {
        contentRef.current.classList.add(cx('content-control-shrink'));
    };

    const handleInput = () => {
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
        if (textAreaRef.current.value === '') textAreaRef.current.style.height = '4rem';
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
                    <div>Service Operator</div>
                </div>
                <div className={cx('form')}>
                    <div className={cx('message')}>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div key={index}>
                                <div className={cx('operator')}>
                                    <img src={images.chatOperator} alt="chat operator icon" />
                                    <div>Hi there, how can we help you today ?</div>
                                </div>
                                <div className={cx('customer')}>
                                    <div>Hey, I would like to ask question about product ABC.</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <textarea
                        className={cx('input')}
                        ref={textAreaRef}
                        onChange={handleInput}
                        placeholder="Type a Message..."
                    ></textarea>
                    <button className={cx('btn')}>
                        <img src={images.sendMesage} alt="send message icon" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ChatBox;
