import React from 'react';
import classes from './BigSlider.module.css';
import BigSliderItem from './BigSliderItem/BigSliderItem';
import Arrow from '../Arrow/Arrow';

const BigSlider = () => {

    const { useState, useEffect } = React;

    let oneStep = 1236;
    let noneStyle = 'none 0s ease 0s';
    let styleTransition = '3s';


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



    function oneLeftMove() {
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
            clearTimeout(myTimeout);
        }, 3000);
    }

    useEffect(() => {
        let myTimeOut = setTimeout(oneLeftMove, 5000);
        return () => {
            clearTimeout(myTimeOut)
        }
    },)

    return (
        <div className={classes.mainContainer}>
            <div className={classes.darkContainer}>
                <div onClick={oneLeftMove} className={classes.arrowContainerLeft}>
                    <Arrow direction='left' />
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

            <div className={classes.darkContainer}>
                <div className={classes.arrowContainerRight}>
                    <Arrow direction='right' />
                </div>

            </div>
        </div >
    );
};

export default BigSlider;