import React from 'react';
import classes from './FiltersContainer.module.css';

import FilterItemDropDownList from './FilterItem/FilterItemDropDownList/FilterItemDropDownList';

const FiltersContainer = () => {
    return (
        <div className={classes.mainContainer}>
            <FilterItemDropDownList />
        </div>
    );
};

export default FiltersContainer;