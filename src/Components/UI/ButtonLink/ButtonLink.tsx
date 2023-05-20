import React, { ButtonHTMLAttributes } from 'react';
import styles from '../ButtonLink/buttonLink.module.css';
import { Link } from 'react-router-dom';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    option?: 'primary';
    large?: boolean;
    transparent?: boolean;
    small?: boolean;
    round?: boolean;
    to?: string;
    onClick?: () => void;
};

const ButtonLink = React.memo<ButtonProps>(
    ({
        className,
        option = 'primary',
        round,
        large,
        transparent,
        small,
        children,
        to,
        onClick,
        ...props
    }) => {
        const clazz = styles.button;

        if (to != null) {
            return (
                <Link className={clazz} to={to} onClick={onClick}>
                    {children}
                </Link>
            );
        }
        return (
            <button {...props} className={clazz} onClick={onClick}>
                {children}
            </button>
        );
    }
);

export default ButtonLink;