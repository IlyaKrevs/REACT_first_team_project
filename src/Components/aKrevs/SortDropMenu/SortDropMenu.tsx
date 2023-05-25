import React from 'react';
import classes from './SortDropMenu.module.css';


import Arrow from '../Arrow/Arrow';
import SortDropDownContainer from './SortDropDownContainer/SortDropDownContainer';
import { useDispatch, useSelector } from 'react-redux';
import { toggleShowSort } from '../../../store/slice/MoviesPageSlices/SortBySlice';

const SortDropMenu = () => {

    let dropMenuIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M576 0c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V32c0-17.7 14.3-32 32-32zM448 96c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V128c0-17.7 14.3-32 32-32zM352 224V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32s32 14.3 32 32zM192 288c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32zM96 416v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V416c0-17.7 14.3-32 32-32s32 14.3 32 32z" /></svg>


    let hideStatusSelector = useSelector((state: any) => state.MoviesSortBy.currentHideStatus);
    let currentSortBySelector = useSelector((state: any) => state.MoviesSortBy.currentSortType)

    let dispatch = useDispatch();

    function toggleHideStatus() {
        dispatch(toggleShowSort(null))
    }


    let directionArrow;
    if (hideStatusSelector) {
        directionArrow = 'down';
    } else {
        directionArrow = 'up';
    }



    return (
        <div onClick={() => toggleHideStatus()} className={classes.mainContainer}>

            <div className={classes.currentSelectionContainer}>
                <div className={classes.iconContainer}>
                    {dropMenuIcon}
                </div>

                <div className={classes.currentSelectionValue}>{currentSortBySelector}</div>

                <Arrow size='medium' direction={directionArrow} />
            </div>


            <SortDropDownContainer />

        </div>
    );
};

export default SortDropMenu;