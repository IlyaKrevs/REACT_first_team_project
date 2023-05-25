import React from 'react';
import classes from './SortDropDownItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSortType } from '../../../../../store/slice/MoviesPageSlices/SortBySlice';

interface SortDropDownItemProps {
    text: string,
}

const SortDropDownItem = ({ text }: SortDropDownItemProps) => {

    let dispatch = useDispatch();
    let currentSortBy = useSelector((state: any) => state.MoviesSortBy.currentSortType);


    let isSelected;
    if (currentSortBy === text) {
        isSelected = true;
    }

    function setCurrentSortBy(param: string) {
        dispatch(setCurrentSortType({ value: param }))
    }

    return (
        <div onClick={() => setCurrentSortBy(text)} className={classes.mainContainer}>
            {isSelected && <div className={classes.selectedItem}></div>}
            <span>
                {text}
            </span>
        </div>
    );
};

export default SortDropDownItem;