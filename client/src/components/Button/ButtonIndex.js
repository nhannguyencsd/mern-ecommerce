import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    rounded = false,
    disabled = false,
    children,
    className,
    leftIcon,
    rightIcon,
    badge,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    // Remove event listener for disabled button
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    // classes are its classNames and its parent classNames
    const classes = cx('wrapper', {
        [className]: className, //className is a parent className
        rounded,
        disabled,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <img className={cx('icon')} src={leftIcon} alt="icon" />}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <img className={cx('icon')} src={rightIcon} alt="icon" />}
            {badge && <span className={cx('badge')}>{badge}</span>}
        </Comp>
    );
}

export default Button;
