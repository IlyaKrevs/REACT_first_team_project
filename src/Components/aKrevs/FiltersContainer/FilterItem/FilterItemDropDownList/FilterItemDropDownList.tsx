import React from 'react';
import classes from './FilterDropDownList.module.css';

import FiltersCheckboxContainer from '../../FiltersCheckboxContainer/FiltersCheckboxContainer';
import Arrow from '../../../Arrow/Arrow';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentViewScreen } from '../../../../../store/slice/MoviesPageSlices/FilterBySlice';
import FiltersRadioContainer from '../../FiltersRadioContainer/FiltersRadioContainer';

interface FilterItemDropDownListProps {
    basicTitle: string,
    dropDownType: 'checkbox' | 'radio',
}

const FilterItemDropDownList = ({ basicTitle, dropDownType }: FilterItemDropDownListProps) => {

    let currentViewScreen = useSelector((state: any) => state.MoviesFilterBy.currentViewScreen);
    let dispatch = useDispatch();



    let isOpen;
    let arrowDirection;
    if (currentViewScreen === basicTitle) {
        isOpen = classes.isOpenStyle
        arrowDirection = 'up'
    } else {
        arrowDirection = 'down';
    }



    const { useState } = React;

    let emptyArr: string[] = [];
    let [localCheckBoxValue, setLocalCheckboxValue] = useState(emptyArr);

    function setLocalFiltersCALLBACK(value: string): void {
        let myArr = [...localCheckBoxValue];
        if (myArr.includes(value)) {
            myArr = myArr.filter(item => item !== value)
            setLocalCheckboxValue(myArr);
        } else {
            myArr.push(value)
            setLocalCheckboxValue(myArr)
        }
    }

    let [localRadioValue, setLocalRadioValue] = useState('');

    function setLocalRadioValueCALLBACK(arg: string) {
        setLocalRadioValue(arg)
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
                        {localCheckBoxValue.join(', ') || localRadioValue}
                    </div>
                </div>

                <Arrow size='medium' direction={arrowDirection} />
            </div>


            {currentViewScreen === basicTitle &&
                <div className={classes.dropDownContainer}>
                    {dropDownType === 'checkbox' &&
                        <FiltersCheckboxContainer
                            callback={setLocalFiltersCALLBACK}
                            currentState={localCheckBoxValue}
                        />}

                    {dropDownType === 'radio' &&
                        <FiltersRadioContainer
                            callback={setLocalRadioValueCALLBACK}
                            currentState={localRadioValue}
                        />}
                </div>
            }
        </div>
    );
};

export default FilterItemDropDownList;