import React from 'react';
import classes from './FiltersCheckboxContainer.module.css';

import FiltersCheckboxItem from './FiltersCheckboxItem/FiltersCheckboxItem';


interface FiltersCheckboxContainerProps {
    callback: (arg: string) => void,
    currentState: string[]
}

const FiltersCheckboxContainer = ({ callback, currentState }: FiltersCheckboxContainerProps) => {


    let myArr = ['1113333', '22244444', '333123123', '444123123', '551231235', '612312312366', '712312377', '8123123188', '991231239', '000123123', '111231232', '112312313', '111231234', '112312315', '111231236', '111231237', '221231231', '221231233', '212312324', '221235', '221231236', '21237', '331123123', '331232', '312312334', '31231235', '33222317',]

    return (
        <div className={classes.mainContainer}>
            {myArr.map(item => {
                return <FiltersCheckboxItem
                    text={item}
                    callback={callback}
                    currentState={currentState}
                />
            })}
        </div>
    )
}



export default FiltersCheckboxContainer; 