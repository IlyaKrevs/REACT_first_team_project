import React from 'react';
import classes from './SortDropDownContainer.module.css';

import SortDropDownItem from './SortDropDownItem/SortDropDownItem';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSortType } from '../../../../store/slice/MoviesPageSlices/SortBySlice';


const SortDropDownContainer = () => {

    let textRU = 'Сортировать по';
    let textENG = 'Sort by';
    let currentLanguage = textRU;

    const { useEffect } = React;


    useEffect(() => {
        dispatch(setCurrentSortType({ value: myArr[0] }));
    }, [])

    let showStatus = useSelector((state: any) => state.MoviesSortBy.currentHideStatus);
    let dispatch = useDispatch();

    let myArr = ['По популярности', '111', '222', '333', '444', '555', '666', '777', '888',]





    return (
        <div hidden={showStatus} className={classes.mainContainer}>
            <div className={classes.dropDownNotActiveItem}>{currentLanguage}</div>

            {myArr.map(item => {
                return <SortDropDownItem text={item} />
            })}

        </div>
    );
};

export default SortDropDownContainer;