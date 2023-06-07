import React from 'react';
import classes from './FilterDropDownList.module.css';

import FiltersCheckboxContainer from '../../FiltersCheckboxContainer/FiltersCheckboxContainer';
import Arrow from '../../../Arrow/Arrow';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentViewScreen } from '../../../../../store/slice/MoviesPageSlices/FilterBySlice';
import FiltersRadioContainer from '../../FiltersRadioContainer/FiltersRadioContainer';

interface FilterItemDropDownListProps {
    basicTitle: {
        nameRU: string,
        nameEN: string,
    },
    showValue: {
        id: number,
        nameRU: string,
        nameEN: string,
        updatedAt: string,
    }[],
    dropDownType: 'checkbox' | 'radio',
    callback: (arg: number[]) => void,
}

const FilterItemDropDownList = ({ basicTitle, showValue, dropDownType, callback }: FilterItemDropDownListProps) => {

    let currentViewScreen = useSelector((state: any) => state.MoviesFilterBy.currentViewScreen);
    let dispatch = useDispatch();


    let isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian);

    let currentTitle;
    currentTitle = isRussian ? basicTitle.nameRU : basicTitle.nameEN;


    let isOpen;
    let arrowDirection;
    if (currentViewScreen === currentTitle) {
        isOpen = classes.isOpenStyle
        arrowDirection = 'up'
    } else {
        arrowDirection = 'down';
    }



    const { useState } = React;

    let emptyArr: number[] = [];
    let [localCheckBoxValue, setLocalCheckboxValue] = useState(emptyArr);

    function setLocalFiltersCALLBACK(value: number): void {
        let myArr = [...localCheckBoxValue];
        if (myArr.includes(value)) {
            myArr = myArr.filter(item => item !== value)
            setLocalCheckboxValue(myArr);
        } else {
            myArr.push(value)
            setLocalCheckboxValue(myArr)
        }
    }

    let firstLocalRadioValue: number | null = null;
    let [localRadioValue, setLocalRadioValue] = useState(firstLocalRadioValue);

    function setLocalRadioValueCALLBACK(arg: any) {
        setLocalRadioValue(arg)
    }

    const { useEffect } = React;

    useEffect(() => {
        callback(localCheckBoxValue)
    }, [localCheckBoxValue])


    return (
        <div onClick={(e) => {
            e.stopPropagation();
            dispatch(setCurrentViewScreen({ value: basicTitle.nameEN }))
        }}
            className={[classes.mainContainer, isOpen].join(' ')}>
            <div className={classes.basicContent}>
                <div className={classes.basicTitle}>
                    {currentTitle}
                    <div className={classes.subTitle}>
                        {localCheckBoxValue.join(', ') || localRadioValue}
                    </div>
                </div>

                <Arrow size='medium' direction={arrowDirection} />
            </div>


            {currentViewScreen === basicTitle.nameEN &&
                <div className={classes.dropDownContainer}>
                    {dropDownType === 'checkbox' &&
                        <FiltersCheckboxContainer
                            callback={setLocalFiltersCALLBACK}
                            currentState={localCheckBoxValue}
                            showValue={showValue}
                        />}

                    {/* {dropDownType === 'radio' &&
                        <FiltersRadioContainer
                            callback={setLocalRadioValueCALLBACK}
                            currentState={localRadioValue}
                        />} */}
                </div>
            }
        </div>
    );
};

export default FilterItemDropDownList;