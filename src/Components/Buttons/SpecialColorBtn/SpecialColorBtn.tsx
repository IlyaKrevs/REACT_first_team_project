import React from 'react';
import classes from './SpecialColorBtn.module.css';

interface SpecialColorBtnProps {
    text: string[],
}

const SpecialColorBtn = ({ text }: SpecialColorBtnProps) => {
    return (
        <div className={classes.subscribeButton}>
            <p>{text}</p>
        </div>
    );
};

export default SpecialColorBtn;