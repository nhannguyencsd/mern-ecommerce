import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './InputForm.module.scss';

const cx = classNames.bind(styles);

const InputForm = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    // handle focus on input
    const handleFocus = (e) => {
        setFocused(true);
    };

    // render
    return (
        <div className={cx('wrapper')}>
            <input
                className={cx('input')}
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() => inputProps.name === 'confirmPassword' && setFocused(true)}
                focused={focused.toString()}
            />
            <span className={cx('floating-label')}>{label}</span>
            <span className={cx('error')}>{errorMessage}</span>
        </div>
    );
};

export default InputForm;
