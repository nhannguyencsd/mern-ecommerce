import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './UserProfilePage.module.scss';
import RegularInputForm from '../../../components/Form/RegularInputForm/RegularInputFormIndex';

const cx = classNames.bind(styles);

function UserProfilePage() {
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
            placeholder: 'John',
            label: 'First Name',
            pattern: '^[A-Za-z0-9]{3,16}$',
            errorMessage: 'First name should be 3-16 characters',
            required: true,
        },
        {
            id: 2,
            name: 'lastName',
            type: 'text',
            placeholder: 'Doe',
            label: 'Last Name',
            pattern: '^[A-Za-z0-9]{3,16}$',
            errorMessage: 'Last name should be 3-16 characters',
            required: true,
        },
        {
            id: 3,
            name: 'email',
            type: 'email',
            placeholder: 'john@doe.com',
            label: 'Email Address',
            errorMessage: 'Invalid email address',
            required: true,
        },
        {
            id: 4,
            name: 'phoneNumber',
            type: 'text',
            placeholder: ' ',
            label: 'Phone number',
        },
        {
            id: 5,
            name: 'address',
            type: 'text',
            placeholder: ' ',
            label: 'Address',
        },
        {
            id: 6,
            name: 'country',
            type: 'text',
            placeholder: ' ',
            label: 'Country',
        },
        {
            id: 7,
            name: 'zipcode',
            type: 'text',
            placeholder: ' ',
            label: 'zipcode',
        },
        {
            id: 8,
            name: 'city',
            type: 'text',
            placeholder: ' ',
            label: 'City',
        },
        {
            id: 9,
            name: 'state',
            type: 'text',
            placeholder: ' ',
            label: 'State',
        },
        {
            id: 10,
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
            id: 11,
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

    //render
    return (
        <div className={cx('wrapper')}>
            <div className="grid">
                <form onSubmit={handleSubmit}>
                    {/* title */}
                    <h2>Edit your profile</h2>
                    {/* inputs */}
                    {inputs.map((input) => (
                        <RegularInputForm key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                    ))}
                    {/* regular sign up*/}
                    <button className={cx('btn-update')}>Update</button>
                </form>
            </div>
        </div>
    );
}

export default UserProfilePage;
