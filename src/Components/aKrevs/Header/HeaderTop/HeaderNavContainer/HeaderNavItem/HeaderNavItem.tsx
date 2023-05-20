import React from 'react';
import classes from './HeaderNavItem.module.css'

interface NavItemProps {
    children: React.ReactNode,
    onMouseEnter?: () => void,
}

const HeaderNavItem = ({ children, onMouseEnter }: NavItemProps) => {
    return (
        <div onMouseEnter={onMouseEnter} className={classes.item}>
            {children}
        </div>

    );
};

export default HeaderNavItem;