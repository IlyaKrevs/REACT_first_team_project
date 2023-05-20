import React from 'react';
import classes from './SpecialColorLink.module.css';

interface SpecialColorTextProps {
    text: string,
}

const SpecialColorLink = ({ text }: SpecialColorTextProps) => {
    return (
        <div className={classes.colorLink}>
            {text}
        </div>
    );
};

export default SpecialColorLink;