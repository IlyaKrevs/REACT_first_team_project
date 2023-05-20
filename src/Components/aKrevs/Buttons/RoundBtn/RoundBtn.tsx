import React from 'react';
import classes from './RoundBtn.module.css';

interface RoundBtnProps {
    icon: React.ReactNode,
}


const RoundBtn = ({ icon }: RoundBtnProps) => {

    return (
        <div className={classes.container}>
            <div className={classes.iconContainer}>
                {icon}
            </div>
        </div>
    );
};

export default RoundBtn;