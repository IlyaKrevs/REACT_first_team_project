import React from 'react';
import classes from './HeaderDropDownMain.module.css';

interface DropDownMain {
    children: React.ReactNode,
    onMouseLeave: () => void,
}

const HeaderDropDownMain = ({ children, onMouseLeave }: DropDownMain) => {
    return (
        <div onMouseLeave={onMouseLeave} className={classes.mainContainer}>
            <div className={classes.innerContainer}>
                {children}
            </div>
        </div>
    );
};

export default HeaderDropDownMain;