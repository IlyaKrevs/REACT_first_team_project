import React from 'react';
import classes from './FilterDropDownList.module.css';

import FiltersCheckboxContainer from '../../FiltersCheckboxContainer/FiltersCheckboxContainer';
import Arrow from '../../../Arrow/Arrow';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentViewScreen } from '../../../../../store/slice/MoviesPageSlices/FilterBySlice';


interface FilterItemDropDownListProps {
    basicTitle: string,
}

const FilterItemDropDownList = ({ basicTitle }: FilterItemDropDownListProps) => {

    let currentViewScreen = useSelector((state: any) => state.MoviesFilterBy.currentViewScreen);
    let currentFiltersParams = useSelector((state: any) => state.MoviesFilterBy.currentFiltersParams)

    let dispatch = useDispatch();



    let isOpen;
    let arrowDirection;
    if (currentViewScreen === basicTitle) {
        isOpen = classes.isOpenStyle
        arrowDirection = 'up'
    } else {
        arrowDirection = 'down';
    }


    return (
        <div onClick={(e) => {
            e.stopPropagation();
            dispatch(setCurrentViewScreen({ value: basicTitle }))
        }}
            className={[classes.mainContainer, isOpen].join(' ')}>
            <div className={classes.basicContent}>
                <div className={classes.basicTitle}>
                    {basicTitle}
                    <div className={classes.subTitle}>
                        {currentFiltersParams.join(', ')}
                    </div>
                </div>

                <Arrow size='medium' direction={arrowDirection} />
            </div>


            {currentViewScreen === basicTitle &&
                <div className={classes.dropDownContainer}>
                    <FiltersCheckboxContainer />
                </div>
            }
        </div>
    );
};

export default FilterItemDropDownList;