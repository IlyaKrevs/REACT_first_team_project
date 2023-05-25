import React from 'react';
import classes from './ToggleLanguage.module.css';

import { toggleLanguage } from '../../../store/slice/HeaderSlices/LanguageSwitchSlice';

import RussiaFlag from './../../../assets/img/russia.png';
import USAFlag from './../../../assets/img/usa.png';
import { useDispatch, useSelector } from 'react-redux';

const ToggleLanguage = () => {

    let isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian);

    let dispatch = useDispatch();

    let hideElemPos;
    let chooseRU;
    let chooseENG;
    if (!isRussian) {
        hideElemPos = classes.englishChoose;
        chooseENG = classes.chosenLanguage;
    } else {
        chooseRU = classes.chosenLanguage
    }

    return (
        <div onClick={() => {
            dispatch(toggleLanguage(''));
        }}
            className={classes.mainContainer}>
            <div className={chooseENG}>
                English
            </div>
            <div className={classes.toggleContainer}>
                <div className={classes.imageContainer}>
                    <img className={classes.imageProps} src={USAFlag} />
                    <img className={classes.imageProps} src={RussiaFlag} />
                </div>
                <div className={[classes.hideElem, hideElemPos].join(' ')}></div>
            </div>

            <div className={chooseRU}>
                Русский
            </div>
        </div>
    );
};

export default ToggleLanguage;