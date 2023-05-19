import React from 'react';
import classes from './HeaderDropDownMain.module.css';

interface DropDownMain {
    children: React.ReactNode,
}

const HeaderDropDownMain = ({ children }: DropDownMain) => {
    return (
        <div className={classes.mainContainer}>
            <div className={classes.innerContainer}>
                {children}
            </div>
        </div>
    );
};

export default HeaderDropDownMain;