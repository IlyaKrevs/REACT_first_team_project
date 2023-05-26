import React from 'react';
import classes from './FiltersCheckboxItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentFiltersParams } from '../../../../../store/slice/MoviesPageSlices/FilterBySlice';

interface FiltersCheckboxItemProps {
    text: string,
}

const FiltersCheckboxItem = ({ text }: FiltersCheckboxItemProps) => {

    let checkboxIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>


    let currentStateCheckboxSelector = useSelector((state: any) => state.MoviesFilterBy.currentFiltersParams)




    const { useState, useEffect } = React;
    let dispatch = useDispatch();

    let [isChecked, setIsChecked] = useState(false);

    let checkedStyle;
    if (isChecked) {
        checkedStyle = classes.checkedStyle;
    }


    useEffect(() => {
        if (currentStateCheckboxSelector.find((item: string) => item === text)) {
            setIsChecked(true)
        } else {
            setIsChecked(false);
        }
    }, [currentStateCheckboxSelector])



    return (
        <div
            onClick={() => {
                setIsChecked(state => !state)
                dispatch(setCurrentFiltersParams({ value: text }))
            }}
            className={[classes.mainContainer, checkedStyle].join(' ')}>
            <input checked={isChecked} className={classes.hiddenInput} type="checkbox" value={text} />

            <div className={classes.textContainer} >
                {text}
            </div >
            <div className={classes.iconContainer}>
                {checkboxIcon}
            </div>
        </div >
    );
};

export default FiltersCheckboxItem;