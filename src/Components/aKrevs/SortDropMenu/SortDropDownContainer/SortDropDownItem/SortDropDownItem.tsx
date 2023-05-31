import React from 'react';
import classes from './SortDropDownItem.module.css';


import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSortParams, } from '../../../../../store/slice/MoviesPageSlices/FilterBySlice';
import { resetCurrentViewScreen } from '../../../../../store/slice/MoviesPageSlices/FilterBySlice';
interface SortDropDownItemProps {
    text: string,
    queryParam: string,
}

const SortDropDownItem = ({ text, queryParam }: SortDropDownItemProps) => {

    const { useEffect } = React;

    let dispatch = useDispatch();
    let currentSortBy = useSelector((state: any) => state.MoviesFilterBy.currentSortParams);

    let isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian)

    let isSelected: any;
    if (currentSortBy.queryParam === queryParam) {
        isSelected = true;
    }


    // useEffect(() => {
    //     if (isSelected) {
    //         dispatch(setCurrentSortParams({
    //             value: {
    //                 showText: currentSortBy.showText,
    //                 queryParam: currentSortBy.queryParam,
    //             }
    //         }))
    //     }
    // }, [isRussian])

    return (
        <div
            onClick={(e) => {
                e.stopPropagation();
                dispatch(setCurrentSortParams({
                    value: {
                        showText: text,
                        queryParam: queryParam,
                    }
                }))
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