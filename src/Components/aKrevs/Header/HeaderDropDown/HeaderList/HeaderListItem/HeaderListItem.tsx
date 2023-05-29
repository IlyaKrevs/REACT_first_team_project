import React from 'react';
import classes from './HeaderListITem.module.css'
import { useSelector } from 'react-redux';

interface liProps {
    fullObj: any
}

const HeaderListItem = ({ fullObj }: liProps) => {

    // let isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian);

    // let currentText;
    // let showText;

    // if (fullObj.nameEN | fullObj.nameRU) {
    //     if (isRussian) {
    //         currentText = fullObj.nameRU;
    //     } else {
    //         currentText = fullObj.nameEN
    //     }
    //     showText = currentText[0].toUpperCase() + currentText.slice(1);
    // }
    return (
        <li className={classes.liItem}>
            {/* {showText ? showText : fullObj} */}
            {fullObj}
        </li>
    );
};

export default HeaderListItem;