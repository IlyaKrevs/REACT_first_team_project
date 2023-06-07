import React from 'react';
import classes from './FilterRangeItem.module.css';
import { useSelector } from 'react-redux';


interface FilterRangeItemProps {
    title: {
        nameRU: string,
        nameEN: string,
    },
    max: number,
    step: number,
    callback: (arg: number) => void,
}

const FilterRangeItem = ({ title, max, step, callback }: FilterRangeItemProps) => {

    let isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian)

    const { useState, useEffect } = React;

    let [currentRangeValue, setCurrentRangeValue] = useState('0');




    useEffect(() => {
        callback(+currentRangeValue)
    }, [currentRangeValue])

    return (
        <div className={classes.mainContainer}>
            <div className={classes.titleContainer}>
                {isRussian ? title.nameRU : title.nameEN}
            </div>
            <div className={classes.inputContainer}>
                <input type="range"
                    min={0}
                    max={max}
                    step={step}
                    value={currentRangeValue}
                    onChange={(e) => setCurrentRangeValue(e.currentTarget.value)}
                />
                {currentRangeValue.length > 1 ? currentRangeValue + '+' : currentRangeValue + '.0+'}
            </div>
        </div>
    );
};

export default FilterRangeItem;