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
import { useDispatch, useSelector } from 'react-redux';
import { string } from 'prop-types';
import { setCurrentHover } from '../../../store/slice/hoverSlice';



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



  const dispatch = useDispatch();
  function hideDropDown() {
    dispatch(setCurrentHover({ value: '' }));
  }


  const selector = useSelector((state: any) => state.hover.currentState);


  let showFirstList = [''];
  let showSecondList = [''];
  let showThirdList = [''];
  let showMoveist = [''];

  if (selector === 'Films') {
    showFirstList = first1
    showSecondList = first2
    showThirdList = first2
    showMoveist = first3
  } else if (selector === 'Series') {
    showFirstList = second1
    showSecondList = second2
    showThirdList = second2
    showMoveist = second3
  } else if (selector === 'Cartoon') {
    showFirstList = third1
    showSecondList = third2
    showThirdList = third2
    showMoveist = third3
  } else if (selector === 'TV+') {
    showFirstList = myTVPLUSTemp
    showSecondList = myTVPLUSTemp
    showThirdList = myTVPLUSTemp
    showMoveist = myTVPLUSTemp
  }



  return (
    <div className={classes.headerContainer}>

      <HeaderTop />
      {selector !== '' &&
        <HeaderDropDownMain onMouseLeave={() => hideDropDown()} >

          <DropDownMovieScreen firstList={showFirstList} secondList={showSecondList} thirdList={showThirdList} moveList={showMoveist} />

          {/* <DropDownTVPlusScreen sideContent={myTVPLUSTemp} /> */}


          {/* <DropDownNotifyScreen /> */}


          {/* <DropDownProfileScreen /> */}

        </HeaderDropDownMain>
      }
    </div>

  );
};

export default Header;
