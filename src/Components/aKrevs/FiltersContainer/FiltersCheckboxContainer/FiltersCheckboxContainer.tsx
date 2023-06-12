import React from 'react';
import classes from './FiltersCheckboxContainer.module.css';

import FiltersCheckboxItem from './FiltersCheckboxItem/FiltersCheckboxItem';


interface FiltersCheckboxContainerProps {
    callback: (arg: number) => void,
    currentState: number[],
    showValue: {
        id: number,
        nameRU: string,
        nameEN: string,
    }[],
}

const FiltersCheckboxContainer = ({ callback, showValue, currentState }: FiltersCheckboxContainerProps) => {



    return (
        <div className={classes.mainContainer}>
            {showValue.map((item, index) => {
                return <FiltersCheckboxItem
                    key={index}
                    fullObj={item}
                    callback={callback}
                    currentState={currentState}
                />
            })}
        </div>
    )
}



export default FiltersCheckboxContainer; 