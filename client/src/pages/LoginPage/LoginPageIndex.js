import classNames from 'classnames/bind';
import styles from './LoginPage.module.scss';
import SignInForm from '../../components/Form/SignInForm/SignInFormIndex';

const cx = classNames.bind(styles);

function LoginPage() {
    return (
        <div className={cx('wrapper')}>
            <div className="grid">
                <SignInForm />
            </div>
        </div>
    );
}

export default LoginPage;
