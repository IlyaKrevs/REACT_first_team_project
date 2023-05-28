import React from 'react';
import classes from './FilterSuggestItem.module.css';


interface FilterSuggestItemProps {
    title: string,
}

const FilterSuggestItem = ({ title }: FilterSuggestItemProps) => {

    const { useState, useEffect } = React;



    let [currentInputValue, setCurrentInputValue] = useState('');
    let [showStatus, setShowStatus] = useState(false);

    let myArr = ['123123', '123123123', '323232323', '123123222222'];

    useEffect(() => {
        if (!currentInputValue) {
            setShowStatus(false)
        }
    })


    return (
        <div className={classes.mainContainer}>
            <div className={classes.titleContainer}>
                {title}
            </div>
            <div className={classes.inputContainer}>
                <input className={classes.inputStyle}
                    type="text"
                    value={currentInputValue}
                    onChange={(e) => {
                        setCurrentInputValue(e.target.value)
                        setShowStatus(true)
                    }}
                    onKeyDown={(e) => e.key === 'Enter' ? setShowStatus(false) : null}
                />
            </div>
            <div className={classes.dropDownContainer}>
                {showStatus && myArr.map(item => {
                    return <div className={classes.dropDownItem}
                        onClick={() => {
                            setCurrentInputValue(item)
                            setShowStatus(false)
                        }}
                    >
                        {item}
                    </div>
                })}


            </div>
        </div >
    );
};

export default FilterSuggestItem;