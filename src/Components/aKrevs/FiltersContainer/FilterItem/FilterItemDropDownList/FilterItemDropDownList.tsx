import React from 'react';
import classes from './FilterDropDownList.module.css';

import FiltersCheckboxContainer from '../../FiltersCheckboxContainer/FiltersCheckboxContainer';
import Arrow from '../../../Arrow/Arrow';
import { useDispatch, useSelector } from 'react-redux';
import { toggleShowGenre } from '../../../../../store/slice/MoviesPageSlices/FiltersByGenreSlice';

const FilterItemDropDownList = () => {

    let hideStatus = useSelector((state: any) => state.MoviesFilterByGenre.currentHideStatus);

    let dispatch = useDispatch();



    let isOpen;
    let arrowDirection;
    if (!hideStatus) {
        isOpen = classes.isOpenStyle
        arrowDirection = 'up'
    } else {
        arrowDirection = 'down';
    }


    return (
        <div onClick={() => {
            dispatch(toggleShowGenre(null))
        }}
            className={[classes.mainContainer, isOpen].join(' ')}>
            <div className={classes.basicContent}>
                <div className={classes.basicTitle}>
                    Жанры
                </div>
                <Arrow size='medium' direction={arrowDirection} />
            </div>


            <div hidden={hideStatus} className={classes.dropDownContainer}>
                <FiltersCheckboxContainer />
            </div>
        </div>
    );
};

export default FilterItemDropDownList;