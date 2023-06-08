import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './RegularInputForm.module.scss';

const cx = classNames.bind(styles);

const RegularInputForm = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    // handle focus on input
    const handleFocus = (e) => {
        setFocused(true);
    };

    // render
    return (
        <div className={cx('wrapper')}>
            <span className={cx('label')}>{label}</span>
            <input
                className={cx('input')}
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() => inputProps.name === 'confirmPassword' && setFocused(true)}
                focused={focused.toString()}
            />
            <span className={cx('error')}>{errorMessage}</span>
        </div>
    );
};

export default RegularInputForm;
