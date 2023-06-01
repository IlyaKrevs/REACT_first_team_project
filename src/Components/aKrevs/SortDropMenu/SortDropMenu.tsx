import React from 'react';
import classes from './SortDropMenu.module.css';


import Arrow from '../Arrow/Arrow';
import SortDropDownContainer, { SortDropDownContainerProps } from './SortDropDownContainer/SortDropDownContainer';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSortParams, setCurrentViewScreen } from '../../../store/slice/MoviesPageSlices/FilterBySlice';

const SortDropMenu = () => {



    let dropMenuIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M576 0c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V32c0-17.7 14.3-32 32-32zM448 96c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V128c0-17.7 14.3-32 32-32zM352 224V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32s32 14.3 32 32zM192 288c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32zM96 416v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V416c0-17.7 14.3-32 32-32s32 14.3 32 32z" /></svg>


    let isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian);

    let currentViewStatus = useSelector((state: any) => state.MoviesFilterBy.currentViewScreen);
    let currentSortParams = useSelector((state: any) => state.MoviesFilterBy.currentSortParams);



    let dispatch = useDispatch();





    let directionArrow;
    if (currentViewStatus !== 'Sort') {
        directionArrow = 'down';
    } else {
        directionArrow = 'up';
    }






    let sortTypeRU: string[] = ['По рейтингу', 'По годам', 'По количесту оценок', 'По алфавиту',]
    let sortTypeEN: string[] = ['By rating', 'By years', 'By number of ratings', 'By alphabet',]

    let sortQueryParamRU: string[] = ['ratign', 'year', 'countRating', 'alphabetRU']
    let sortQueryParamEN: string[] = ['ratign', 'year', 'countRating', 'alphabetEN']

    let sortParamsObject = {
        sortTypeRU,
        sortTypeEN,
        sortQueryParamRU,
        sortQueryParamEN,
    }


    const { useState, useEffect } = React;

    let [titleText, setTitleText] = useState(currentSortParams.showText)

    useEffect(() => {
        setTitleText(currentSortParams.showText)
        if (isRussian) {
            if (!sortTypeRU.includes(titleText)) {
                setTitleText(sortTypeRU[sortTypeEN.indexOf(currentSortParams.showText)])
            }
        } else {
            if (!sortTypeEN.includes(titleText)) {
                setTitleText(sortTypeEN[sortTypeRU.indexOf(currentSortParams.showText)])
            }
        }
    }, [isRussian, currentSortParams.showText])

    return (
        <div
            onClick={(e) => {
                e.stopPropagation();
                dispatch(setCurrentViewScreen({ value: 'Sort' }))
            }}
            className={classes.mainContainer}>

            <div className={classes.currentSelectionContainer}>
                <div className={classes.iconContainer}>
                    {dropMenuIcon}
                </div>

                <div className={classes.currentSelectionValue}>{titleText}</div>

                <Arrow size='medium' direction={directionArrow} />
            </div>


            {currentViewStatus === 'Sort' &&
                <SortDropDownContainer sortParamsObject={sortParamsObject} />
            }

        </div>
    );
};

export default SortDropMenu;