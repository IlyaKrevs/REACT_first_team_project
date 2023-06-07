import React from 'react';
import classes from './FiltersContainer.module.css';

import FilterItemDropDownList from './FilterItem/FilterItemDropDownList/FilterItemDropDownList';
import FilterRangeItem from './FilterRangeItem/FilterRangeItem';
import FilterSuggestItem from './FiltersSuggestIem/FilterSuggestItem';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentGenresParams } from '../../../store/slice/MoviesPageSlices/FilterBySlice';

const FiltersContainer = () => {

    let genresSelector = useSelector((state: any) => state.AllGenres.allServerGenres)
    let genresTitle = {
        nameRU: 'Жанры',
        nameEN: 'Genres',
    }


    let dispatch = useDispatch();

    function giveMeGenresParamsCALLBACK(arg: number[]) {
        dispatch(setCurrentGenresParams({ value: arg }))
    }

    let myselector = useSelector((state: any) => state.MoviesFilterBy.currentGenresParams)

    const { useEffect } = React;

    useEffect(() => {
        console.log(myselector)
    },)


    return (
        <div className={classes.mainContainer}>
            <FilterItemDropDownList
                basicTitle={genresTitle}
                showValue={genresSelector}
                callback={giveMeGenresParamsCALLBACK}
                dropDownType='checkbox' />
            {/* <FilterItemDropDownList basicTitle={genresTitle} dropDownType='checkbox' />
            <FilterItemDropDownList basicTitle={genresTitle} dropDownType='radio' /> */}
            <div className={classes.specialContainer}>
                <FilterRangeItem title='По рейтингу' max={10} step={0.1} />
                <FilterRangeItem title='По оценкам' max={500} step={100} />
            </div>
            <div className={classes.specialContainer}>
                <FilterSuggestItem title='Hello' />
                <FilterSuggestItem title='Hello123' />
            </div>
        </div>
    );
};

export default FiltersContainer;