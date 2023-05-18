import React from 'react';
import classes from './HeaderUserItem.module.css';

interface HeaderUserItemProps {
    icon: React.ReactNode,
    text?: string,
}

const HeaderUserItem = ({ icon, text }: HeaderUserItemProps) => {
    return (
        <div className={classes.mainContainer}>
            <div className={classes.imgContainer}>
                {icon}
            </div>
            {text && <p>{text}</p>}
        </div>
    );
};

export default HeaderUserItem;