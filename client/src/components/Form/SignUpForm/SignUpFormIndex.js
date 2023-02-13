import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './SignUpForm.module.scss';
import InputForm from '../InputForm/InputFormIndex';
import Button from '../../Button/ButtonIndex';
import images from '../../../assets/images/imagesIndex';

const cx = classNames.bind(styles);

const SignUpForm = () => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    // input fields
    const inputs = [
        {
            id: 1,
            name: 'firstName',
            type: 'text',
            placeholder: ' ',
            label: 'First Name',
            pattern: '^[A-Za-z0-9]{3,16}$',
            errorMessage: 'First name should be 3-16 characters',
            required: true,
        },
        {
            id: 2,
            name: 'lastName',
            type: 'text',
            placeholder: ' ',
            label: 'Last Name',
            pattern: '^[A-Za-z0-9]{3,16}$',
            errorMessage: 'Last name should be 3-16 characters',
            required: true,
        },
        {
            id: 3,
            name: 'email',
            type: 'email',
            placeholder: ' ',
            label: 'Email Address',
            errorMessage: 'Invalid email address',
            required: true,
        },
        {
            id: 4,
            name: 'password',
            type: 'password',
            autoComplete: 'off',
            placeholder: ' ',
            label: 'Password',
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            errorMessage: 'Password should be 8-20 characters',
            required: true,
        },
        {
            id: 5,
            name: 'confirmPassword',
            type: 'password',
            autoComplete: 'off',
            placeholder: ' ',
            label: 'Confirm Password',
            pattern: values.password,
            errorMessage: "Passwords don't match",
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
                    Create an account or <Link to="/">log in</Link>
                </div>
                {/* inputs */}
                {inputs.map((input) => (
                    <InputForm key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                ))}
                {/* regular sign up*/}
                <button className={cx('btn-sign-up')}>Sign Up</button>
                <div className={cx('divider')}>
                    <div className={cx('divider-or')}>OR</div>
                    <div className={cx('divider-line')}></div>
                </div>
                {/* sing up with google */}
                <button className={cx('btn-sign-up-google')}>
                    <img src={require('../../../assets/images/brands/google.png')} alt="Google"></img>
                    <span>Sign Up With Google</span>
                </button>
            </form>
        </div>
    );
};

export default SignUpForm;
