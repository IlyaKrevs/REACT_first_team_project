import classes from './Carousel.module.css';
import FilmCardEmpty from '../FilmCard/FilmCardEmpty';
import Arrow from '../Arrow/Arrow';
import React from 'react';

interface CarouselProps {
    children: React.ReactNode[] | null,
    emptyItem?: boolean,
}


const Carousel = ({ children, emptyItem = false }: CarouselProps) => {

    const { useState, createRef, useEffect } = React;
    let [translateXState, setTranslateXState] = useState(0);

    let viewPortRef: any = createRef();
    let lentaRef: any = createRef();

    let viewPortWidth: any;
    let lentaScrollWidth: any;
    let lentaViewWidth: any;

    let oneClickMovingLenght: number;
    let maxMoveLenght: any;


    useEffect(() => {
        viewPortWidth = viewPortRef.current.clientWidth;
        lentaScrollWidth = lentaRef.current.scrollWidth;
        lentaViewWidth = lentaRef.current.clientWidth;

        oneClickMovingLenght = viewPortWidth;
        maxMoveLenght = lentaScrollWidth - lentaViewWidth;
    }, [viewPortRef, lentaRef])


    let [endScroll, setEndSroll] = useState(false);


    function leftMove() {
        if ((translateXState - oneClickMovingLenght) > -maxMoveLenght) {
            setTranslateXState(translateXState - oneClickMovingLenght);
        } else {
            setTranslateXState(-maxMoveLenght)
            setEndSroll(true)
        }
    }

    function rightMove() {
        if ((translateXState + oneClickMovingLenght) <= 0) {
            setTranslateXState(translateXState + oneClickMovingLenght);
            setEndSroll(false)
        } else {
            setTranslateXState(0);
        }
    }

    return (
        <div className={classes.mainContainer}>
            {!(translateXState < 0) ? null : <div onClick={() => rightMove()} className={classes.leftArrowContainer}>
                <Arrow size='big' direction='left' />
            </div>}

            <div ref={viewPortRef} className={classes.viewPort}>


                <div ref={lentaRef}
                    style={{ transform: `translateX(${translateXState}px)` }}
                    className={classes.lenta}>

                    {children}
                    {emptyItem && <FilmCardEmpty />}

                </div>
            </div>

            {endScroll ? null : <div onClick={() => leftMove()} className={classes.rightArrowContainer}>
                <Arrow size='big' direction='right' />
            </div>}
        </div>
    );
};

export default Carousel;