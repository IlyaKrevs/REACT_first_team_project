import React from 'react';
import classes from './FiltersContainer.module.css';

import FilterItemDropDownList from './FilterItem/FilterItemDropDownList/FilterItemDropDownList';
import FilterRangeItem from './FilterRangeItem/FilterRangeItem';
import FilterSuggestItem from './FiltersSuggestIem/FilterSuggestItem';

const FiltersContainer = () => {
    return (
        <div className={classes.mainContainer}>
            <FilterItemDropDownList basicTitle='Жанры' dropDownType='checkbox' />
            <FilterItemDropDownList basicTitle='Страны' dropDownType='checkbox' />
            <FilterItemDropDownList basicTitle='Годы' dropDownType='radio' />
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