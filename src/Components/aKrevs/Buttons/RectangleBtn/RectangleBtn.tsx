import React from 'react';
import classes from './RectangleBtn.module.css';

interface RectangleBtnProps {
    icon?: React.ReactNode,
    color: 'light' | 'dark' | 'red',
    text: string,
}

const RectangleBtn = ({ icon, text, color }: RectangleBtnProps) => {

    let currentColor;

    if (color === 'light') {
        currentColor = classes.lightColor;
    } else if (color === 'dark') {
        currentColor = classes.darkColor;
    } else if (color === 'red') {
        currentColor = classes.redColor;
    }


    return (
        <div className={[classes.btnContainer, currentColor].join(' ')}>
            {icon &&
                <div className={classes.imageContainer}>
                    {icon}
                </div>}

            <p>{text}</p>
        </div>
    );
};

export default RectangleBtn;