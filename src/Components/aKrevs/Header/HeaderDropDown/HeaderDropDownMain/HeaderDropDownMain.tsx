import React from 'react';
import classes from './HeaderDropDownMain.module.css';
import { useDispatch } from 'react-redux';
import { resetCurrentHover } from '../../../../../store/slice/HeaderSlices/showDropDownSlice';

interface DropDownMain {
    children: React.ReactNode,
}

const HeaderDropDownMain = ({ children, }: DropDownMain) => {

    let dispatch = useDispatch();
    let resetHover = () => dispatch(resetCurrentHover(''));

    return (
        <div onMouseLeave={resetHover} className={classes.mainContainer}>
            <div className={classes.innerContainer}>
                {children}
            </div>
        </div>
    );
};

export default HeaderDropDownMain;