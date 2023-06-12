import React from 'react';
import classes from './FilterRangeItem.module.css';
import { useSelector } from 'react-redux';


interface FilterRangeItemProps {
    globalValue: string,
    title: {
        nameRU: string,
        nameEN: string,
    },
    max: number,
    step: number,
    callback: (arg: number) => void,
}

const FilterRangeItem = ({ globalValue, title, max, step, callback }: FilterRangeItemProps) => {

    let isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian)



    return (
        <div className={classes.mainContainer}>
            <div className={classes.titleContainer}>
                {isRussian ? title.nameRU : title.nameEN}
            </div>
            <div className={classes.inputContainer}>
                <input type="range"
                    min={1}
                    max={max}
                    step={step}
                    value={globalValue}
                    onChange={(e) => callback(+e.currentTarget.value)}
                />
                {+globalValue > 1 ? +globalValue + '+' : +globalValue + '.0+'}
            </div>
        </div>
    );
};

export default FilterRangeItem;