import React from 'react';
import classes from './Header.module.css';

import HeaderTop from './HeaderTop/HeaderTop';
import ClauseUL from '../Clause/ClauseUL/ClauseUL';
import Clause from '../Clause/Clause';
import HeaderDropDownMain from './HeaderDropDown/HeaderDropDownMain/HeaderDropDownMain';
import DropDownMovieScreen from './HeaderDropDown/HeaderDropDownMain/MovieScreen/DropDownMovieScreen';
import HeaderList from './HeaderDropDown/HeaderList/HeaderList';
import RectangleBtn from '../Buttons/RectangleBtn/RectangleBtn';
import WidgetAnimationContainer from './SubscribeWidget/AnimationContainer/WidgetAnimationContainer';
import SubscribeWidget from './SubscribeWidget/SubscribeWidget';
import DropDownTVPlusScreen from './HeaderDropDown/HeaderDropDownMain/TVPlusScreen/DropDownTVPlusScreen';
import DropDownNotifyScreen from './HeaderDropDown/HeaderDropDownMain/NotifyScreen/DropDownNotifyScreen';
import DropDownProfileScreen from './HeaderDropDown/HeaderDropDownMain/ProfileScreen/DropDownProfileScreen';


const Header = () => {

    let myLI = <ClauseUL liArr={['123', '123', '123', '123', '123', '123']} />

    let myTEMP = <Clause title={{
        text: 'HELLO WORLD',
        type: 'big',
    }}
        description={{
            text: ['hello', 'world', myLI, 'PIZDEC YA MOZG',],
            type: 'classic',
        }} />


    let mytemp15 = ['Артхаус', 'Артхаус', 'Артхаус', 'Артхаус', 'Артхаус', 'Артхаус', 'Артхаус', 'Артхаус', 'Артхаус', 'Артхаус', 'Артхаус', 'Артхаус', 'Артхаус', 'Артхаус', 'Артхаус', 'Артхаус', 'Артхаус', 'Артхаус', 'Артхаус', 'Артхаус', 'Артхаус', 'Артхаус',];

    let mytemp3 = ['Артхаус', 'Артхаус', 'Артхаус',];


    let mytemp12 = ['Новинки', 'Новинки', 'Новинки', 'Новинки', 'Новинки', 'Новинки', 'Новинки', 'Новинки', 'Новинки', 'Новинки', 'Новинки', 'Новинки',];

    let myTVPLUSTemp = ['ТВ-каналы', 'ТВ-каналы', 'ТВ-каналы', 'ТВ-каналы', 'ТВ-каналы',]



    return (
        <div className={classes.headerContainer}>

            <HeaderTop />

            {/* <HeaderDropDownMain>

                <DropDownMovieScreen firstList={mytemp15} secondList={mytemp3} thirdList={mytemp3} moveList={mytemp12} />

            </HeaderDropDownMain> */}

            {/* 
            <HeaderDropDownMain>

                <DropDownTVPlusScreen sideContent={myTVPLUSTemp} />

            </HeaderDropDownMain> */}


            {/* <HeaderDropDownMain>

                <DropDownNotifyScreen />

            </HeaderDropDownMain> */}


            {/* <HeaderDropDownMain>

                <DropDownProfileScreen />

            </HeaderDropDownMain> */}

        </div>
    );
};

export default Header;