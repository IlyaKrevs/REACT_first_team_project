import React from 'react';
import classes from './SortDropDownItem.module.css';


import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSortParams, } from '../../../../../store/slice/MoviesPageSlices/FilterBySlice';
import { resetCurrentViewScreen } from '../../../../../store/slice/MoviesPageSlices/FilterBySlice';
interface SortDropDownItemProps {
    text: string,
}

const SortDropDownItem = ({ text }: SortDropDownItemProps) => {

    let dispatch = useDispatch();
    let currentSortBy = useSelector((state: any) => state.MoviesFilterBy.currentSortParams);


    let isSelected;
    if (currentSortBy === text) {
        isSelected = true;
    }

    return (
        <div
            onClick={(e) => {
                e.stopPropagation();
                dispatch(setCurrentSortParams({ value: text }))
                dispatch(resetCurrentViewScreen(''))
            }
            }
            className={classes.mainContainer} >
            {isSelected && <div className={classes.selectedItem}></div>}
            <span>
                {text}
            </span>
        </div >
    );
};

export default SortDropDownItem;