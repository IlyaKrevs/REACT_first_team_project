import React from 'react';
import classes from './Arrow.module.css';

interface ArrowProps {
    direction: 'left' | 'up' | 'right' | 'down',
}


const Arrow = ({ direction }: ArrowProps) => {

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

    return (
        <div className={[classes.arrow, changeDir].join(' ')}>

        </div>

    );
};

export default Arrow;