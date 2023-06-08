import React from 'react';
import classes from './SortDropMenu.module.css';


import Arrow from '../Arrow/Arrow';
import SortDropDownContainer, { SortDropDownContainerProps } from './SortDropDownContainer/SortDropDownContainer';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentViewScreen } from '../../../store/slice/MoviesPageSlices/FilterBySlice';

const SortDropMenu = () => {



    let dropMenuIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M576 0c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V32c0-17.7 14.3-32 32-32zM448 96c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V128c0-17.7 14.3-32 32-32zM352 224V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32s32 14.3 32 32zM192 288c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32zM96 416v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V416c0-17.7 14.3-32 32-32s32 14.3 32 32z" /></svg>


    let isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian);

    let currentViewStatus = useSelector((state: any) => state.MoviesFilterBy.currentViewScreen);
    let currentSortParams = useSelector((state: any) => state.MoviesFilterBy.currentSortParams.showText);



    let dispatch = useDispatch();





    let directionArrow;
    if (currentViewStatus !== 'Sort') {
        directionArrow = 'down';
    } else {
        directionArrow = 'up';
    }






    let sortTypeRU: string[] = ['По рейтингу', 'По годам', 'По количесту оценок', 'По алфавиту',]
    let sortTypeEN: string[] = ['By rating', 'By years', 'By number of ratings', 'By alphabet',]

    let sortQueryParamRU: string[] = ['rating', 'year', 'countRating', 'alphabetRU']
    let sortQueryParamEN: string[] = ['rating', 'year', 'countRating', 'alphabetEN']

    let currentTitleText;
    if (isRussian) {
        currentTitleText = sortTypeRU;
    } else {
        currentTitleText = sortTypeEN;
    }


    let sortParamsObject = {
        sortTypeRU,
        sortTypeEN,
        sortQueryParamRU,
        sortQueryParamEN,
    }



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

                <div className={classes.currentSelectionValue}>{currentTitleText[currentSortParams]}</div>

                <Arrow size='medium' direction={directionArrow} />
            </div>


            {currentViewStatus === 'Sort' &&
                <SortDropDownContainer sortParamsObject={sortParamsObject} />
            }

        </div>
    );
};

export default SortDropMenu;