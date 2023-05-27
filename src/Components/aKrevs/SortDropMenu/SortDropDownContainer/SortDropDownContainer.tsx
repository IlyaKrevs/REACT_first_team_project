import React from 'react';
import classes from './SortDropDownContainer.module.css';

import SortDropDownItem from './SortDropDownItem/SortDropDownItem';


interface SortDropDownContainerProps {
    selectArr: string[],
}


const SortDropDownContainer = ({ selectArr }: SortDropDownContainerProps) => {

    let textRU = 'Сортировать по';
    let textENG = 'Sort by';
    let currentLanguage = textRU;




    return (
        <div className={classes.mainContainer}>
            <div className={classes.dropDownNotActiveItem}>{currentLanguage}</div>

            {selectArr.map(item => {
                return <SortDropDownItem text={item} />
            })}

        </div>
    );
};

export default SortDropDownContainer;