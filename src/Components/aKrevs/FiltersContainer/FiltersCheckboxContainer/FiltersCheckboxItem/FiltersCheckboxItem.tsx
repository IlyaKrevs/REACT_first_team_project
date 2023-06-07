import React from 'react';
import classes from './FiltersCheckboxItem.module.css';
import { useSelector } from 'react-redux';

interface FiltersCheckboxItemProps {
    fullObj: {
        id: number,
        nameRU: string,
        nameEN: string,
        updatedAt: string,
    },
    callback: (arg: number) => void,
    currentState: number[]
}

const FiltersCheckboxItem = ({ fullObj, callback, currentState }: FiltersCheckboxItemProps) => {

    let checkboxIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>

    let isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian)

    let currentText;
    if (isRussian) {
        currentText = fullObj.nameRU
    } else {
        currentText = fullObj.nameEN
    }

    const { useState, useEffect } = React;

    let [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        if (currentState.includes(fullObj.id)) {
            setIsChecked(true)
        } else {
            setIsChecked(false)
        }
    }, [currentState])

    let checkedStyle;
    if (isChecked) {
        checkedStyle = classes.checkedStyle;
    }




    return (
        <div
            onClick={() => callback(fullObj.id)}
            className={[classes.mainContainer, checkedStyle].join(' ')}>
            <input checked={isChecked} className={classes.hiddenInput} type="checkbox" value={fullObj.id} />

            <div className={classes.textContainer} >
                {currentText[0].toUpperCase() + currentText.slice(1)}
            </div >
            <div className={classes.iconContainer}>
                {checkboxIcon}
            </div>
        </div >
    );
};

export default FiltersCheckboxItem;