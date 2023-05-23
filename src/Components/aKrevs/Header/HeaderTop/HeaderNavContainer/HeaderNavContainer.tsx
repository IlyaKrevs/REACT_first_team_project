import React from 'react';
import classes from './HeaderNavContainer.module.css'
import HeaderNavItem from './HeaderNavItem/HeaderNavItem';
import { useDispatch } from 'react-redux';
import { resetCurrentHover, setCurrentHover } from '../../../../../store/slice/HeaderSlices/showDropDownSlice';
import { resetMovingItemPos } from '../../../../../store/slice/HeaderSlices/movingListSlice';




const HeaderNavContainer = () => {

    let navRU = ['Мой Иви', 'Что нового', 'Фильмы', 'Сериалы', 'Мультфильмы', 'TV+',];
    let navENG = ['My ivi', 'News', 'Films', 'Series', 'Cartoon', 'TV+',];

    let currentLanguage = navRU;


    let dispatch = useDispatch();
    let resetHover = () => dispatch(resetCurrentHover(''));
    let resetMovingItem = () => dispatch(resetMovingItemPos(''));



    function setHoverDispatch(typeParams: string, posParams: string) {
        dispatch(setCurrentHover({
            value: {
                currentType: typeParams,
                currentPosition: posParams,
            }
        }))
    }



    function comboFunc(type: string, value: string) {
        setHoverDispatch(type, value);
        resetMovingItem()
    }

    return (
        <div className={classes.container}>
            <HeaderNavItem
                onMouseEnter={resetHover}
                children={currentLanguage[0]} />

            <HeaderNavItem
                onMouseEnter={resetHover}
                children={currentLanguage[1]} />

            <HeaderNavItem
                onMouseEnter={() => comboFunc('movies', 'Films')}
                children={currentLanguage[2]} />

            <HeaderNavItem
                onMouseEnter={() => comboFunc('movies', 'Series')}

                children={currentLanguage[3]} />

            <HeaderNavItem
                onMouseEnter={() => comboFunc('movies', 'Cartoon')}

                children={currentLanguage[4]} />

            <HeaderNavItem
                onMouseEnter={() => comboFunc('movies', 'TV+')}
                children={currentLanguage[5]} />
        </div>
    );
};

export default HeaderNavContainer;