import React from 'react';
import classes from './Top10Item.module.css';



interface Top10ItemProps {
    image: string,
    firstNumber: string,
    secondNumber?: string | null,
}

const Top10Item = ({ image, firstNumber, secondNumber, }: Top10ItemProps) => {
    return (
        <div className={classes.mainContainer}>
            <img className={classes.imgContainer} src={image} />
            <div className={classes.imageFade}>
                <div className={classes.numberPlace}>
                    <img className={classes.numberImage} src={firstNumber} />
                    {secondNumber && <img className={classes.numberImage} src={secondNumber} />}
                </div>
            </div>

        </div>
    );
};

export default Top10Item;