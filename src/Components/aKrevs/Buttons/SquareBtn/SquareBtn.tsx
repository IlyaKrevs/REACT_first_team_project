import React from 'react';
import classes from './SquareBtn.module.css';

interface SquareBtnProps {
    icon: React.ReactNode,
}

const SquareBtn = ({ icon }: SquareBtnProps) => {
    return (
        <div className={classes.imgContainer}>
            <div className={classes.btnImage}>
                {icon}
            </div>
        </div>
    );
};

export default SquareBtn;