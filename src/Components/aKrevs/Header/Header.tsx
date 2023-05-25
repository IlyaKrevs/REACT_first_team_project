import React from 'react';
import classes from './Header.module.css';

import HeaderTop from './HeaderTop/HeaderTop';
import ClauseUL from '../Clause/ClauseUL/ClauseUL';
import Clause from '../Clause/Clause';
import HeaderDropDownMain from './HeaderDropDown/HeaderDropDownMain/HeaderDropDownMain';
import DropDownMovieScreen from './HeaderDropDown/HeaderDropDownMain/MovieScreen/DropDownMovieScreen';
import DropDownNotifyScreen from './HeaderDropDown/HeaderDropDownMain/NotifyScreen/DropDownNotifyScreen';
import DropDownProfileScreen from './HeaderDropDown/HeaderDropDownMain/ProfileScreen/DropDownProfileScreen';
import DropDownTVPlusScreen from './HeaderDropDown/HeaderDropDownMain/TVPlusScreen/DropDownTVPlusScreen';
import { useSelector } from 'react-redux';




const Header = () => {

  let first1 = ['Артхаус', 'Артхаус', 'Артхаус', 'Артхаус', 'Артхаус', 'Артхаус', 'Артхаус', 'Артхаус', 'Артхаус', 'Артхаус', 'Артхаус', 'Артхаус', 'Артхаус', 'Артхаус', 'Артхаус', 'Артхаус', 'Артхаус', 'Артхаус', 'Артхаус', 'Артхаус', 'Артхаус', 'Артхаус',];
  let first2 = ['Артхаус', 'Артхаус', 'Артхаус',];
  let first3 = ['Новинки', 'Новинки', 'Новинки', 'Новинки', 'Новинки', 'Новинки', 'Новинки', 'Новинки', 'Новинки', 'Новинки', 'Новинки', 'Новинки',];



  let myTVPLUSTemp = ['ТВ-каналы', 'ТВ-каналы', 'ТВ-каналы', 'ТВ-каналы', 'ТВ-каналы',]



  let second1 = ['Check', 'Check', 'Check', 'Check', 'Check', 'Check', 'Check', 'Check', 'Check', 'Check', 'Check', 'Check', 'Check', 'Check', 'Check', 'Check', 'Check', 'Check', 'Check', 'Check', 'Check', 'Check',];
  let second2 = ['Check', 'Check', 'Check',];
  let second3 = ['Check', 'Check', 'Check', 'Check', 'Check', 'Check', 'Check', 'Check', 'Check', 'Check', 'Check', 'Check',];




  let third1 = ['ystal', 'ystal', 'ystal', 'ystal', 'ystal', 'ystal', 'ystal', 'ystal', 'ystal', 'ystal', 'ystal', 'ystal', 'ystal', 'ystal', 'ystal', 'ystal', 'ystal', 'ystal', 'ystal', 'ystal', 'ystal', 'ystal',];
  let third2 = ['ystal', 'ystal', 'ystal',];
  let third3 = ['ystal', 'ystal', 'ystal', 'ystal', 'ystal', 'ystal', 'ystal', 'ystal', 'ystal', 'ystal', 'ystal', 'ystal',];






  const selector = useSelector((state: any) => state.HeaderShowDropDown);

  let temp1 = selector.currentType;
  let temp2 = selector.currentPosition;

  let showFirstList = [''];
  let showSecondList = [''];
  let showThirdList = [''];
  let showMoveist = [''];

  if (temp2 === 'Films') {
    showFirstList = first1;
    showSecondList = first2;
    showThirdList = first2;
    showMoveist = first3;
  } else if (temp2 === 'Series') {
    showFirstList = second1;
    showSecondList = second2;
    showThirdList = second2;
    showMoveist = second3;
  } else if (temp2 === 'Cartoon') {
    showFirstList = third1;
    showSecondList = third2;
    showThirdList = third2;
    showMoveist = third3;
  } else if (temp2 === 'TV+') {
    showFirstList = third2;
    showSecondList = third2;
    showThirdList = third2;
    showMoveist = third2;
  }



  return (
    <div className={classes.headerContainer}>

      <HeaderTop />

      {temp1 &&
        <HeaderDropDownMain>

          {temp1 === 'movies' &&
            <DropDownMovieScreen firstList={showFirstList} secondList={showSecondList} thirdList={showThirdList} moveList={showMoveist} />
          }

          {temp1 === 'TV+' &&
            < DropDownTVPlusScreen sideContent={myTVPLUSTemp} />
          }

          {temp1 === 'Notify' &&
            < DropDownNotifyScreen />
          }

          {temp1 === 'Profile' &&
            <DropDownProfileScreen />
          }

        </HeaderDropDownMain>
      }

    </div>

  );
};

export default Header;
