import React from 'react';
import classes from './HeaderNavItem.module.css'

interface NavItemProps {
    children: React.ReactNode,
}

const HeaderNavItem = ({ children }: NavItemProps) => {
    return (
        <div className={classes.item}>
            {children}
        </div>

    );
};

export default HeaderNavItem;