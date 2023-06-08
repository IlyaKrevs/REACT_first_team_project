import React from 'react';
import classes from './HeaderListITem.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentGenresParams } from '../../../../../../store/slice/MoviesPageSlices/FilterBySlice';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../../../../../router/routes';

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

    let dispatch = useDispatch();


    return (
        <Link to={ROUTE.MOVIES}>
            <li className={classes.liItem}
                onClick={() => dispatch(setCurrentGenresParams({ value: [fullObj.id] }))}
            >
                {showText}
            </li>
        </Link>
    );
};

export default HeaderListItem;