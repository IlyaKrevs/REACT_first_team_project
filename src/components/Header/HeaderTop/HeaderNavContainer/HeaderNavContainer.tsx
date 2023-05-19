import React from 'react';
import classes from './HeaderNavContainer.module.css'
import HeaderNavItem from './HeaderNavItem/HeaderNavItem';

const HeaderNavContainer = () => {

    let navRU = ['Мой Иви', 'Что нового', 'Фильмы', 'Сериалы', 'Мультфильмы', 'TV+',];
    let navENG = ['My ivi', 'News', 'Films', 'Series', 'Cartoon', 'TV+',];

    let currentLanguage = navRU;

    return (
        <div className={classes.container}>
            {currentLanguage.map(elem => {
                return <HeaderNavItem children={elem} />
            })}
        </div>
    );
};

export default HeaderNavContainer;