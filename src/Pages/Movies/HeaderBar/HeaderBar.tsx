import React from 'react';

const HeaderBar = () => {
    return (
        <div className='headerBar__container'>
            <div className='headerBar__breadCrumbsContainer'>
                <ul className='headerBar__breadCrumbs'>
                    <li className='breadCrumbs__item'>
                        <a className='bredCrumbs__itemLINK' href="#"><span>Мой Иви</span></a>
                    </li>
                    <li className='breadCrumbs__item'><span>Фильмы</span></li>
                    <li className='breadCrumbs__item'><span>Казино</span></li>
                    <li className='breadCrumbs__item'><span>Блекджек</span></li>
                </ul>
            </div>


            <div className='headerBar__textInfo'>
                <div className="headerBar__textInfo__title">
                    Фильмы
                </div>
                <div className="headerBar__textInfo__params">
                    Все жанры, Все страны, Все годы
                </div>
            </div>
        </div>
    );
};

export default HeaderBar;