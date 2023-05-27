import React from 'react';
import classes from './FiltersCheckboxContainer.module.css';

import FiltersCheckboxItem from './FiltersCheckboxItem/FiltersCheckboxItem';

const FiltersCheckboxContainer = () => {


    let myArr = ['123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123',]

    return (
        <div className={classes.mainContainer}>
            {myArr.map(item => {
                return <FiltersCheckboxItem text={item} />
            })}
        </div>
    )
}



export default FiltersCheckboxContainer; 