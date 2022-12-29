import classnames from 'classnames/bind';
import styles from './ChatBox.module.scss';
import images from '../../assets/images/imagesIndex';

const cx = classnames.bind(styles);

function ChatBox() {
    return (
        <div className={cx('wrapper')}>
            <input type="checkbox" id={cx('chatbox')} />
            <label className={cx('outlet')} htmlFor={cx('chatbox')}>
                <img className={cx('comment')} src={images.chatBubble} alt="chat icon" />
                <img className={cx('close')} src={images.close} alt="close icon" />
            </label>
        </div>
    );
}

export default ChatBox;
