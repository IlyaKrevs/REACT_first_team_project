import React from 'react';
import classes from './HeaderNavItem.module.css'

interface NavItemProps {
    children: React.ReactNode,
    onMouseEnter?: () => void,
    onMouseLeave?: () => void,
}

const HeaderNavItem = ({ children, onMouseEnter, onMouseLeave }: NavItemProps) => {
    return (
        <div onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} className={classes.item}>
            {children}
        </div>

    );
};

export default HeaderNavItem;