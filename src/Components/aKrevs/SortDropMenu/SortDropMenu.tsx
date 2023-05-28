import React from 'react';
import classes from './SortDropMenu.module.css';


import Arrow from '../Arrow/Arrow';
import SortDropDownContainer from './SortDropDownContainer/SortDropDownContainer';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSortParams, setCurrentViewScreen } from '../../../store/slice/MoviesPageSlices/FilterBySlice';

const SortDropMenu = () => {



    let dropMenuIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M576 0c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V32c0-17.7 14.3-32 32-32zM448 96c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V128c0-17.7 14.3-32 32-32zM352 224V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32s32 14.3 32 32zM192 288c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32zM96 416v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V416c0-17.7 14.3-32 32-32s32 14.3 32 32z" /></svg>


    let myArr = ['По популярности', '111', '222', '333', '444', '555', '666', '777', '888',]

    let currentViewStatus = useSelector((state: any) => state.MoviesFilterBy.currentViewScreen);
    let currentSortParams = useSelector((state: any) => state.MoviesFilterBy.currentSortParams)

    let dispatch = useDispatch();



    let directionArrow;
    if (currentViewStatus !== 'Sort') {
        directionArrow = 'down';
    } else {
        directionArrow = 'up';
    }

    let { useEffect } = React;

    useEffect(() => {
        dispatch(setCurrentSortParams({ value: myArr[0] }));
    }, [])

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

                <div className={classes.currentSelectionValue}>{currentSortParams}</div>

                <Arrow size='medium' direction={directionArrow} />
            </div>


            {currentViewStatus === 'Sort' &&
                <SortDropDownContainer selectArr={myArr} />
            }

        </div>
    );
};

export default SortDropMenu;