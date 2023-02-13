import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './SignInForm.module.scss';
import InputForm from '../InputForm/InputFormIndex';
import Button from '../../Button/ButtonIndex';
import images from '../../../assets/images/imagesIndex';

const cx = classNames.bind(styles);

const SignInForm = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    // input fields
    const inputs = [
        {
            id: 1,
            name: 'email',
            type: 'email',
            placeholder: ' ',
            label: 'Email Address',
            errorMessage: 'Invalid email address',
            required: true,
        },
        {
            id: 2,
            name: 'password',
            type: 'password',
            autoComplete: 'off',
            placeholder: ' ',
            label: 'Password',
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            errorMessage: 'Password should be 8-20 characters',
            required: true,
        },
    ];

    // handle sumit form
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    // handle on change of input
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    // render
    return (
        <div className={cx('wrapper')}>
            <form onSubmit={handleSubmit}>
                {/* logo */}
                <Button className={cx('logo')} to="/" leftIcon={images.logo}>
                    <span className={cx('tagline')}>Techmart</span>
                </Button>
                {/* title */}
                <div className={cx('title')}>
                    Login to your account or <Link to="/register">sign up</Link>
                </div>
                {/* inputs */}
                {inputs.map((input) => (
                    <InputForm key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                ))}
                {/* forgot password */}
                <Link to="/forgot-password" className={cx('forgot-password')}>
                    Forgot your password?
                </Link>
                {/* regular sign in*/}
                <button className={cx('btn-sign-in')}>Sign In</button>
                <div className={cx('divider')}>
                    <div className={cx('divider-or')}>OR</div>
                    <div className={cx('divider-line')}></div>
                </div>
                {/* sign in with google */}
                <button className={cx('btn-sign-in-google')}>
                    <img src={require('../../../assets/images/brands/google.png')} alt="Google"></img>
                    <span>Sign In With Google</span>
                </button>
            </form>
        </div>
    );
};

export default SignInForm;
