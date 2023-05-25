import React from 'react';
import classes from './Arrow.module.css';

interface ArrowProps {
    direction: 'left' | 'up' | 'right' | 'down' | string,
    size: 'big' | 'medium' | 'small'
}


const Arrow = ({ direction, size }: ArrowProps) => {

    let changeDir;

    if (direction === 'left') {
        changeDir = classes.leftDirection;
    } else if (direction === 'up') {
        changeDir = classes.upDirection;
    } else if (direction === 'right') {
        changeDir = classes.rightDirection;
    } else if (direction === 'down') {
        changeDir = classes.downDirection;
    }



    let changeSize;

    if (size === 'big') {
        changeSize = classes.bigSize;
    } else if (size === 'medium') {
        changeSize = classes.mediumSize;
    } else if (size === 'small') {
        changeSize = classes.smallSize;
    }

    return (
        <div className={[classes.arrow, changeDir, changeSize].join(' ')}>

        </div>

    );
};

export default Arrow;