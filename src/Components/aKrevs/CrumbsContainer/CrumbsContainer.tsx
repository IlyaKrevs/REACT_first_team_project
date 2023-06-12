import classes from './CrumbsContainer.module.css';
import CrumbsItem from './CrumbsItem/CrumbsItem';
import TitleText from '../Text/TitleText/TitleText';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

interface CrumbsContainerProps {}

type localUsageArr = {
  id: number;
  nameRU: string;
  nameEN: string;
}[];

const CrumbsContainer = () => {
  let myArr = ['Мой Иви', 'Фильмы', 'Казино', 'Блекджек'];

  let basicTitlesRU = ['Все жанры', 'Все страны'];
  let basicTitlesEN = ['All genres', 'All countries'];

<<<<<<< HEAD
  let isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian);
  let showTitleArr = isRussian ? basicTitlesRU : basicTitlesEN;
=======

>>>>>>> e007c28c93e0e0bfe283514f22ea4ac2bf9d5656

  let mapArr = myArr.map((item) => ({
    text: item,
    link: item,
  }));

  let allGenresSelector = useSelector((state: any) => state.AllData.allServerGenres);
  let allCountriesSelector = useSelector((state: any) => state.AllData.allServerCountries);

  let currentGenresSelector = useSelector((state: any) => state.MoviesFilterBy.currentGenresParams);
  let currentCountriesSelector = useSelector((state: any) => state.MoviesFilterBy.currentCountryParams);

  function createTitlesArr(allData: localUsageArr, chosenData: number[]) {
    let resultArr: localUsageArr = [];

<<<<<<< HEAD
    for (let i = 0; i < chosenData.length; i++) {
      for (let j = 0; j < allData.length; j++) {
        if (chosenData[i] === allData[j].id) {
          resultArr.push(allData[j]);
=======
    let mapArr: any[] = [];



    let allGenresSelector = useSelector((state: any) => state.AllData.allServerGenres)
    let allCountriesSelector = useSelector((state: any) => state.AllData.allServerCountries)

    let currentGenresSelector = useSelector((state: any) => state.MoviesFilterBy.currentGenresParams)
    let currentCountriesSelector = useSelector((state: any) => state.MoviesFilterBy.currentCountryParams)

    function createTitlesArr(allData: localUsageArr, chosenData: number[]) {

        let resultArr: localUsageArr = [];

        for (let i = 0; i < chosenData.length; i++) {
            for (let j = 0; j < allData.length; j++) {
                if (chosenData[i] === allData[j].id) {
                    resultArr.push(allData[j])
                }
            }
>>>>>>> e007c28c93e0e0bfe283514f22ea4ac2bf9d5656
        }
      }
    }

    return resultArr;
  }

  let allChosenGenresArr = createTitlesArr(allGenresSelector, currentGenresSelector).sort((a, b) => a.id - b.id);
  let allChosenCountriesArr = createTitlesArr(allCountriesSelector, currentCountriesSelector).sort((a, b) => a.id - b.id);

  function createShowElems(startArr: localUsageArr) {
    let myArr = startArr.map((item) => {
      let myTemp = isRussian ? item.nameRU[0].toUpperCase() + item.nameRU.slice(1) : item.nameEN[0].toUpperCase() + item.nameEN.slice(1);
      return myTemp;
    });

    return myArr.join(', ');
  }

  function createArrForURL(startArr: any) {
    let myArr;
    if (Array.isArray(startArr)) {
      myArr = startArr.map((item) => item.nameEN);
    }
    return myArr || null;
  }

  let myGenresLink = createArrForURL(allChosenGenresArr);
  let myCountriesLink = createArrForURL(allChosenCountriesArr);

  function createFinalLink(genresArr: any, countriesArr: any) {
    let finalArr = '';

    if (genresArr && genresArr.length) {
      finalArr += genresArr.join('+');
    }

<<<<<<< HEAD
    if (countriesArr && countriesArr.length) {
      if (finalArr) {
        finalArr += '/';
      }
      finalArr += countriesArr.join('+');
=======




    function createArrForURL(startArr: any) {
        let myArr;
        if (Array.isArray(startArr)) {


            myArr = startArr.map(item => {
                let myTemp = item.nameEN;
                return myTemp
            })
        }
        return myArr || null;
>>>>>>> e007c28c93e0e0bfe283514f22ea4ac2bf9d5656
    }

    return finalArr;
  }

  return (
    <div className={classes.mainContainer}>
      <ul className={classes.crumbsUL}>
        {mapArr.map((item, index) => (
          <CrumbsItem key={index} text={item.text} link={item.link} />
        ))}
      </ul>

<<<<<<< HEAD
      <div className={classes.filtersTitle}>
        <TitleText type="moviePage" text="Фильмы" />
        <div className={classes.paramsContainer}>
          <div className={classes.paramsItem}>{allChosenGenresArr.length ? createShowElems(allChosenGenresArr) : showTitleArr[0]}</div>
          <div className={classes.paramsItem}>{allChosenCountriesArr.length ? createShowElems(allChosenCountriesArr) : showTitleArr[1]}</div>
        </div>
      </div>
    </div>
  );
=======
    let myGenresLink = createArrForURL(allChosenGenresArr)
    let myCountriesLink = createArrForURL(allChosenCountriesArr)



    function createFinalLink(genresArr: any, countriesArr: any) {
        let finalArr;

        if (genresArr.length && countriesArr.length) {
            finalArr = genresArr.join('+') + '/' + countriesArr.join('+')
        } else if (genresArr.length) {
            finalArr = genresArr.join('+');
        } else if (countriesArr.length) {
            finalArr = countriesArr.join('+');
        }

        return (finalArr ? finalArr : '')
    }



    let linkHistory = useNavigate();
    const { useEffect } = React;

    useEffect(() => {
        if (createFinalLink(myGenresLink, myCountriesLink).length) {
            linkHistory('filters/' + createFinalLink(myGenresLink, myCountriesLink))
        } else {
            linkHistory('')
        }
    }, [currentGenresSelector, currentCountriesSelector])

    let myArr: any = ['Мой Иви', 'Фильмы', createShowElems(allChosenGenresArr).length ? createShowElems(allChosenGenresArr) : null];

    for (let i = 0; i < myArr.length; i++) {
        mapArr.push({
            text: myArr[i],
        })
        mapArr = mapArr.filter(item => item.text !== null)
    }


    return (
        <div className={classes.mainContainer}>
            <ul className={classes.crumbsUL}>
                {mapArr.map((item, index, arr) => {
                    let linkValue = true;
                    if (index === arr.length - 1) {
                        linkValue = false
                    }
                    let linkToValue: string = '';
                    if (index === 0) {
                        linkToValue = '/';
                    } else if (index === 1) {
                        linkToValue = '/movies'
                    }

                    return <CrumbsItem key={index} text={item.text} link={linkValue} linkTo={linkToValue} />
                }
                )}
            </ul>

            <div className={classes.filtersTitle}>
                <TitleText type='moviePage' text='Фильмы' />
                <div className={classes.paramsContainer}>
                    <div className={classes.paramsItem}>
                        {allChosenGenresArr.length ? createShowElems(allChosenGenresArr) : showTitleArr[0]}
                    </div>

                    <div className={classes.paramsItem}>
                        {allChosenCountriesArr.length ? createShowElems(allChosenCountriesArr) : showTitleArr[1]}
                    </div>

                </div>
            </div>
        </div >
    );
>>>>>>> e007c28c93e0e0bfe283514f22ea4ac2bf9d5656
};

export default CrumbsContainer;
