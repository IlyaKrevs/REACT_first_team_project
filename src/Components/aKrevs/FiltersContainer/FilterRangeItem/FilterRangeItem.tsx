import React from 'react';
import classes from './FilterRangeItem.module.css';


interface FilterRangeItemProps {
    title: string,
    max: number,
    step: number,
}

const FilterRangeItem = ({ title, max, step }: FilterRangeItemProps) => {

    const { useState } = React;

    let [currentRangeValue, setCurrentRangeValue] = useState('5');

    return (
        <div className={classes.mainContainer}>
            <div className={classes.titleContainer}>
                {title}
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