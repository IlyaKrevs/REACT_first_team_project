import React from 'react';
import classes from './FilterDropDownList.module.css';

import FiltersCheckboxContainer from '../../FiltersCheckboxContainer/FiltersCheckboxContainer';
import Arrow from '../../../Arrow/Arrow';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentViewScreen } from '../../../../../store/slice/MoviesPageSlices/FilterBySlice';
import FiltersRadioContainer from '../../FiltersRadioContainer/FiltersRadioContainer';

interface FilterItemDropDownListProps {
    globalValue: number[],
    basicTitle: {
        nameRU: string,
        nameEN: string,
    },
    showValue: {
        id: number,
        nameRU: string,
        nameEN: string,
    }[],
    dropDownType: 'checkbox' | 'radio',
    callback: (arg: number[]) => void,
}

const FilterItemDropDownList = ({ globalValue, basicTitle, showValue, dropDownType, callback }: FilterItemDropDownListProps) => {

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
    let [localCheckBoxValue, setLocalCheckboxValue] = useState(globalValue.length ? globalValue : emptyArr);




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




    function createShowTextArr(idArr: number[], fullObj: {
        id: number,
        nameRU: string,
        nameEN: string,
    }[]) {

        let currentShowTextArr: string[] = [];


        for (let i = 0; i < idArr.length; i++) {
            for (let j = 0; j < fullObj.length; j++) {

                if (idArr[i] === fullObj[j].id) {
                    currentShowTextArr.push(isRussian ? fullObj[j].nameRU : fullObj[j].nameEN)
                }
            }
        }

        return currentShowTextArr
    }


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
                        {createShowTextArr(localCheckBoxValue, showValue)
                            .map(item => item[0].toUpperCase() + item.slice(1))
                            .sort()
                            .join(', ') || localRadioValue}
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