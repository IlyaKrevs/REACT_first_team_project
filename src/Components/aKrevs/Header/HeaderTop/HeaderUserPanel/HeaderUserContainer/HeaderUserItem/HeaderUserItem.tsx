import React from 'react';
import classes from './HeaderUserItem.module.css';

interface HeaderUserItemProps {
    icon: React.ReactNode,
    text?: string,
    onMouseEnter?: () => void,
}

const HeaderUserItem = ({ icon, text, onMouseEnter, }: HeaderUserItemProps) => {
    return (
        <div
            onMouseEnter={onMouseEnter}

            className={classes.mainContainer}>
            <div className={classes.imgContainer}>
                {icon}
            </div>
            {text && <p>{text}</p>}
        </div>
    );
};

export default HeaderUserItem;