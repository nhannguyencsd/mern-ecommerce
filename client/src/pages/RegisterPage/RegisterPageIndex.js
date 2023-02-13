import classNames from 'classnames/bind';
import styles from './RegisterPage.module.scss';
import SignUpForm from '../../components/Form/SignUpForm/SignUpFormIndex';

const cx = classNames.bind(styles);

function RegisterPage() {
    return (
        <div className={cx('wrapper')}>
            <div className="grid">
                <SignUpForm />
            </div>
        </div>
    );
}

export default RegisterPage;
