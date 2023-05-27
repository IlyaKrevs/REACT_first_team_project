import React from 'react';
import classes from './FiltersRadioContainer.module.css';
import FiltersRadioItem from './FiltersRadioItem/FiltersRadioItem';


interface FiltersRadioContainerProps {
    callback: (arg: string) => void,
    currentState: string,
}

const FiltersRadioContainer = ({ callback, currentState }: FiltersRadioContainerProps) => {

    let myArr = ['111', '222', '333', '444', '555', '666', '777', '888', '999', '000'];


    const { useState } = React;



    return (
        <div className={classes.mainContainer}>
            {myArr.map(item => {
                return <FiltersRadioItem
                    currentState={currentState}
                    callback={callback}
                    text={item}
                />
            })}
        </div>
    );
};

export default FiltersRadioContainer;