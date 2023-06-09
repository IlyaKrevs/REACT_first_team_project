import React from 'react';
import classes from './CrumbsContainer.module.css';
import CrumbsItem from './CrumbsItem/CrumbsItem';
import TitleText from '../Text/TitleText/TitleText';
import { useSelector } from 'react-redux';

interface CrumbsContainerProps {

}

type localUsageArr = {
    id: number,
    nameRU: string,
    nameEN: string,
}[];

const CrumbsContainer = () => {


    let myArr = ['Мой Иви', 'Фильмы', 'Казино', 'Блекджек',];

    let basicTitlesRU = ['Все жанры', 'Все страны',]
    let basicTitlesEN = ['All genres', 'All countries',]


    let isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian)
    let showTitleArr;

    if (isRussian) {
        showTitleArr = basicTitlesRU;
    } else {
        showTitleArr = basicTitlesEN;
    }

    let mapArr = [];

    for (let i = 0; i < myArr.length; i++) {
        mapArr.push({
            text: myArr[i],
            link: myArr[i],
        })
    }

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
        }

        return resultArr;
    }

    let allChosenGenresArr = createTitlesArr(allGenresSelector, currentGenresSelector).sort((a, b) => a.id - b.id);
    let allChosenCountriesArr = createTitlesArr(allCountriesSelector, currentCountriesSelector).sort((a, b) => a.id - b.id);


    function createShowElems(startArr: localUsageArr) {
        let myArr;
        if (isRussian) {
            myArr = startArr.map(item => {
                let myTemp = item.nameRU[0].toUpperCase() + item.nameRU.slice(1);
                return myTemp
            })
        } else {
            myArr = startArr.map(item => {
                let myTemp = item.nameEN[0].toUpperCase() + item.nameEN.slice(1);
                return myTemp
            })
        }
        myArr = myArr.join(', ');
        return myArr
    }










    function createArrForURL(startArr: any) {
        let myArr;
        if (Array.isArray(startArr)) {


            myArr = startArr.map(item => {
                let myTemp = item.nameEN;
                return myTemp
            })
        }
        return myArr || null;
    }



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


        return finalArr
    }

    console.log(createFinalLink(myGenresLink, myCountriesLink))




    // let linkHistory = useNavigate();
    const { useEffect } = React;

    // useEffect(() => {
    //     console.log([currentGenresSelector.length ? [currentGenresSelector].join('+') : null, currentCountriesSelector ? [currentCountriesSelector].join('+') : null].join('/'))
    // }, [currentGenresSelector, currentCountriesSelector])




    return (
        <div className={classes.mainContainer}>
            <ul className={classes.crumbsUL}>
                {mapArr.map((item, index) => {
                    return <CrumbsItem key={index} text={item.text} link={item.link} />
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
};

export default CrumbsContainer;