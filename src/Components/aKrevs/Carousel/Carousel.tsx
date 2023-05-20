import React from 'react';
import classes from './Carousel.module.css';

import FilmCard from '../FilmCard/FilmCard';
import FilmCardEmpty from '../FilmCard/FilmCardEmpty';
import Arrow from '../Arrow/Arrow';

interface CarouselProps {
    type: 'classic',
}


const Carousel = ({ type }: CarouselProps) => {

    function make20items() {

        let myArr = [];

        for (let i = 0; i < 20; i++) {
            myArr.push(<FilmCard />)
        }
        return myArr;
    }






    const { useState } = React;
    let [marginLeftState, setMarginLeftState] = useState(0);

    // i have no idea how calculate this params, bcs can't get FilmCard width and count items in line (for calculate full lenght line)
    let oneClickMovingLenght: number;
    let maxMoveLenght: number = 0;
    if (type === 'classic') {
        oneClickMovingLenght = 1086;
        maxMoveLenght = -2534;
    }

    function leftMove() {
        if ((marginLeftState - oneClickMovingLenght) >= maxMoveLenght) {
            setMarginLeftState(marginLeftState - oneClickMovingLenght);
        } else {
            setMarginLeftState(maxMoveLenght)
        }
    }

    function rightMove() {
        if ((marginLeftState + oneClickMovingLenght) <= 0) {
            setMarginLeftState(marginLeftState + oneClickMovingLenght);
        } else {
            setMarginLeftState(0);
        }
    }

    return (
        <div className={classes.mainContainer}>
            {marginLeftState < 0 &&
                <div onClick={() => rightMove()} className={classes.leftArrowContainer}>
                    <Arrow direction='left' />
                </div>}

            <div className={classes.viewPort}>


                <div style={{ marginLeft: marginLeftState }} className={classes.lenta}>

                    {make20items()}
                    <FilmCardEmpty />


                </div>

            </div>

            {marginLeftState > maxMoveLenght &&
                <div onClick={() => leftMove()} className={classes.rightArrowContainer}>
                    <Arrow direction='right' />
                </div>}
        </div>
    );
};

export default Carousel;