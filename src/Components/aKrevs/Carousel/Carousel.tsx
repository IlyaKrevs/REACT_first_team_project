import classes from './Carousel.module.css';
import FilmCardEmpty from '../FilmCard/FilmCardEmpty';
import Arrow from '../Arrow/Arrow';
import React from 'react';

interface CarouselProps {
    type: 'classic' | 'top10',
    children: React.ReactNode[],
    emptyItem?: boolean,
}


const Carousel = ({ type, children, emptyItem = false }: CarouselProps) => {

    // i have no idea how calculate this params, bcs can't get FilmCard width and count items in line (for calculate full lenght line)
    let oneClickMovingLenght: number;
    let maxMoveLenght: number = 0;

    if (type === 'classic') {
        oneClickMovingLenght = 1086;
        maxMoveLenght = -2534;
    } if (type === 'top10') {
        oneClickMovingLenght = 1004;
        maxMoveLenght = -1250;
    }





    const { useState } = React;
    let [marginLeftState, setMarginLeftState] = useState(0);



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
                    <Arrow size='big' direction='left' />
                </div>}

            <div className={classes.viewPort}>


                <div style={{ marginLeft: marginLeftState }} className={classes.lenta}>

                    {children}
                    {emptyItem && <FilmCardEmpty />}

                </div>
            </div>

            {marginLeftState > maxMoveLenght &&
                <div onClick={() => leftMove()} className={classes.rightArrowContainer}>
                    <Arrow size='big' direction='right' />
                </div>}
        </div>
    );
};

export default Carousel;