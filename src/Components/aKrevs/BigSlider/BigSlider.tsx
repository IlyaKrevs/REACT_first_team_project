import React from 'react';
import classes from './BigSlider.module.css';
import BigSliderItem from './BigSliderItem/BigSliderItem';
import Arrow from '../Arrow/Arrow';

const BigSlider = () => {

    const { useState, useEffect } = React;

    let didMountTimeout: any;

    useEffect(() => {
        didMountTimeout = setTimeout(oneLeftMove, 5000);
        return () => clearTimeout(didMountTimeout)
    },)


    let oneStep = 1236;
    let noneStyle = 'none 0s ease 0s';
    let styleTransition = '3s';
    let transitionTimeMS = 3000;


    let basicArray = [
        <BigSliderItem color='first' />,
        <BigSliderItem color='second' />,
        <BigSliderItem color='third' />,
        <BigSliderItem color='fourth' />,
        <BigSliderItem color='fiveth' />,
    ];


    let [showArr, setShowArr] = useState(basicArray)
    let [transitionTime, setTransitionTime] = useState(noneStyle);
    let [translateX, setTranslateX] = useState(0);
    let [didClick, setDidClick] = useState(false);



    function oneLeftMove() {
        if (didClick) return;
        setDidClick(true);



        let direction = -1;

        setTransitionTime(styleTransition);
        setTranslateX(oneStep * direction);


        let myTimeout = setTimeout(() => {

            setTransitionTime(noneStyle);


            setShowArr((item) => {
                let myArr = item.slice()
                let firstItem = myArr[0];
                myArr.shift();
                myArr.push(firstItem);
                return myArr
            })



            setTranslateX(0);
            setDidClick(false)
            clearTimeout(myTimeout);

        }, transitionTimeMS);
    }
    function oneRightMove() {
        if (didClick) return;
        setDidClick(true);



        let direction = 1;

        setTransitionTime(styleTransition);
        setTranslateX(oneStep * direction);


        let myTimeout = setTimeout(() => {

            setTransitionTime(noneStyle);


            setShowArr((item) => {
                let myArr = item.slice()
                let lastItem = myArr[myArr.length - 1];
                myArr.pop();
                myArr.unshift(lastItem);
                return myArr
            })

            setTranslateX(0);
            setDidClick(false)
            clearTimeout(myTimeout);

        }, transitionTimeMS);
    }



    function onClickLeftMove() {

        clearTimeout(didMountTimeout);
        oneLeftMove();
    }
    function onClickRightMove() {
        clearTimeout(didMountTimeout);
        oneRightMove();
    }

    return (
        <div className={classes.mainContainer}>
            <div onClick={onClickLeftMove}
                className={classes.darkContainer}>
                <div className={classes.arrowContainerLeft}>
                    <Arrow size='big' direction='left' />
                </div>
            </div>
            <div className={classes.viewPort}>

                <div className={classes.lenta}
                    style={{
                        transition: transitionTime,
                        transform: `translateX(${translateX}px)`
                    }}>
                    {showArr}
                </div>

            </div>

            <div onClick={onClickRightMove} className={classes.darkContainer}>
                <div className={classes.arrowContainerRight}>
                    <Arrow size='big' direction='right' />
                </div>

            </div>
        </div >
    );
};

export default BigSlider;