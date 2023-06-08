import React from 'react';
import classes from './SortDropDownContainer.module.css';

import SortDropDownItem from './SortDropDownItem/SortDropDownItem';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSortParams } from '../../../../store/slice/MoviesPageSlices/FilterBySlice';

export interface SortDropDownContainerProps {
    sortParamsObject: {
        sortTypeRU: string[],
        sortTypeEN: string[],
        sortQueryParamRU: string[],
        sortQueryParamEN: string[],
    }
}



const SortDropDownContainer = ({ sortParamsObject }: SortDropDownContainerProps) => {


    let isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian);


    let textRU = 'Сортировать по';
    let textENG = 'Sort by';

    let currentLanguage;
    let currentArrText: any[];
    let currentArrQuery: any[];

    if (isRussian) {
        currentLanguage = textRU;
        currentArrText = sortParamsObject.sortTypeRU;
        currentArrQuery = sortParamsObject.sortQueryParamRU
    } else {
        currentLanguage = textENG;
        currentArrText = sortParamsObject.sortTypeEN
        currentArrQuery = sortParamsObject.sortQueryParamEN
    }



    return (
        <div className={classes.mainContainer}>
            <div className={classes.dropDownNotActiveItem}>{currentLanguage}</div>

            {currentArrText.map((item, index) => {
                return <SortDropDownItem currentTextID={index} text={item} queryParam={currentArrQuery[index]} />
            })}

        </div>
    );
};

export default SortDropDownContainer;