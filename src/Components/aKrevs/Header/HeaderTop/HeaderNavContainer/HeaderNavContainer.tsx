import React from 'react';
import classes from './HeaderNavContainer.module.css'
import HeaderNavItem from './HeaderNavItem/HeaderNavItem';
import { useDispatch } from 'react-redux';
import { setCurrentHover } from '../../../../../store/slice/hoverSlice';




const HeaderNavContainer = () => {

    let navRU = ['Мой Иви', 'Что нового', 'Фильмы', 'Сериалы', 'Мультфильмы', 'TV+',];
    let navENG = ['My ivi', 'News', 'Films', 'Series', 'Cartoon', 'TV+',];

    let currentLanguage = navRU;


    let dispatch = useDispatch();

    function setHoverDispatch(params: string) {
        dispatch(setCurrentHover({ value: params }))
    }

    return (
        <div className={classes.container}>
            <HeaderNavItem children={currentLanguage[0]} />
            <HeaderNavItem children={currentLanguage[1]} />

            <HeaderNavItem
                onMouseEnter={() => setHoverDispatch('Films')}

                children={currentLanguage[2]} />
            <HeaderNavItem
                onMouseEnter={() => setHoverDispatch('Series')}

                children={currentLanguage[3]} />
            <HeaderNavItem
                onMouseEnter={() => setHoverDispatch('Cartoon')}

                children={currentLanguage[4]} />
            <HeaderNavItem
                onMouseEnter={() => setHoverDispatch('TV+')}

                children={currentLanguage[5]} />
        </div>
    );
};

export default HeaderNavContainer;