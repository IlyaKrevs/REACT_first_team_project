import React from 'react';
import classes from './FiltersContainer.module.css';

import FilterItemDropDownList from './FilterItem/FilterItemDropDownList/FilterItemDropDownList';

const FiltersContainer = () => {
    return (
        <div className={classes.mainContainer}>
            <FilterItemDropDownList basicTitle='Жанры' />
            <FilterItemDropDownList basicTitle='Годы' />
            <FilterItemDropDownList basicTitle='Страны' />
        </div>
    );
};

export default FiltersContainer;