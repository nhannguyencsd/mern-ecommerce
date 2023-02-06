import classNames from 'classnames/bind';
import styles from './RegisterPage.module.scss';

const cx = classNames.bind(styles);

function RegisterPage() {
    return (
        <div className={cx('wrapper')}>
            <div className="grid">Register Page</div>
        </div>
    );
}

export default RegisterPage;
