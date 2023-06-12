import React from 'react';
import classes from './Top10Item.module.css';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../../router';



interface Top10ItemProps {
    image: string,
    id: number,
    firstNumber: string,
    secondNumber?: string | null,
}

const Top10Item = ({ image, id, firstNumber, secondNumber, }: Top10ItemProps) => {
    return (
        <Link to={`${ROUTE.HOME}${ROUTE.WATCH}/${id}`}>
            <div className={classes.mainContainer}>
                <img className={classes.imgContainer} src={'http://localhost:12120/api/films/images/' + image} />
                <div className={classes.imageFade}>
                    <div className={classes.numberPlace}>
                        <img className={classes.numberImage} src={firstNumber} />
                        {secondNumber && <img className={classes.numberImage} src={secondNumber} />}
                    </div>
                </div>

            </div>
        </Link>
    );
};

export default Top10Item;