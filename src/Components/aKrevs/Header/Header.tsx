import React from 'react';
import classes from './Header.module.css';
import HeaderTop from './HeaderTop/HeaderTop';
import HeaderDropDownMain from './HeaderDropDown/HeaderDropDownMain/HeaderDropDownMain';
import DropDownMovieScreen from './HeaderDropDown/HeaderDropDownMain/MovieScreen/DropDownMovieScreen';
import DropDownNotifyScreen from './HeaderDropDown/HeaderDropDownMain/NotifyScreen/DropDownNotifyScreen';
import DropDownProfileScreen from './HeaderDropDown/HeaderDropDownMain/ProfileScreen/DropDownProfileScreen';
import DropDownTVPlusScreen from './HeaderDropDown/HeaderDropDownMain/TVPlusScreen/DropDownTVPlusScreen';
import { useSelector } from 'react-redux';


const Header = () => {

  const isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian);

  const showDropDownSelector = useSelector((state: any) => state.HeaderShowDropDown);

  let currentType = showDropDownSelector.currentType;
  let currentPosition = showDropDownSelector.currentPosition;


  let allGenresSelector = useSelector((state: any) => state.AllGenres.allServerGenres)



  let first2 = createEmptyTextArr(3, isRussian ? 'Текст2' : 'Text2')
  let first3 = createEmptyTextArr(12, isRussian ? 'Текст3' : 'Text3')

  let second1 = createEmptyTextArr(22, isRussian ? 'Текст4' : 'Text4')
  let second2 = createEmptyTextArr(3, isRussian ? 'Текст5' : 'Text5')
  let second3 = createEmptyTextArr(12, isRussian ? 'Текст6' : 'Text6')

  let third1 = createEmptyTextArr(22, isRussian ? 'Текст7' : 'Text7')
  let third2 = createEmptyTextArr(3, isRussian ? 'Текст8' : 'Text8')
  let third3 = createEmptyTextArr(12, isRussian ? 'Текст9' : 'Text9')


  let myTVPLUSTemp = createEmptyTextArr(5, isRussian ? 'Текст10' : 'Text10')


  function createEmptyTextArr(arrLength: number, arrText: string) {
    let myArr = [];

    for (let i = 0; i < arrLength; i++) {
      myArr.push(arrText)
    }
    return myArr;
  }



  let emptyArr: any = [];

  let showFirstList = emptyArr;
  let showSecondList = emptyArr;
  let showThirdList = emptyArr;
  let showMoveist = emptyArr;

  if (currentPosition === 'Films') {
    showFirstList = allGenresSelector;
    showSecondList = first2;
    showThirdList = first2;
    showMoveist = first3;
  } else if (currentPosition === 'Series') {
    showFirstList = second1;
    showSecondList = second2;
    showThirdList = second2;
    showMoveist = second3;
  } else if (currentPosition === 'Cartoon') {
    showFirstList = third1;
    showSecondList = third2;
    showThirdList = third2;
    showMoveist = third3;
  }



  return (
    <div className={classes.headerContainer}>

      <HeaderTop />

      {currentType &&
        <HeaderDropDownMain>

          {currentType === 'movies' && allGenresSelector.length &&
            <DropDownMovieScreen
              firstList={showFirstList}
              secondList={showSecondList}
              thirdList={showThirdList}
              moveList={showMoveist} />
          }

          {currentType === 'TV+' &&
            < DropDownTVPlusScreen
              sideContent={myTVPLUSTemp} />
          }

          {currentType === 'Notify' &&
            < DropDownNotifyScreen />
          }

          {currentType === 'Profile' &&
            <DropDownProfileScreen />
          }

        </HeaderDropDownMain>
      }

    </div>

  );
};

export default Header;
