import React from 'react';
import classes from './HeaderListITem.module.css'
import { useSelector } from 'react-redux';

interface liProps {
    fullObj: string | any
}

const HeaderListItem = ({ fullObj }: liProps) => {

    let isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian);

    let currentText;
    let showText;

    if (fullObj.nameEN || fullObj.nameRU) {

        if (isRussian) {
            currentText = fullObj.nameRU;
        } else {
            currentText = fullObj.nameEN
        }
        let firstLetter = currentText[0].toUpperCase();
        let otherText = currentText.slice(1);

        showText = firstLetter + otherText;
    } else {
        showText = fullObj
    }



    return (
        <li className={classes.liItem}>
            {showText}
        </li>
    );
};

export default HeaderListItem;