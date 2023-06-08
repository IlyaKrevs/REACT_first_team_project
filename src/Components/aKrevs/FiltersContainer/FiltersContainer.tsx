import React, { useState } from 'react';
import classes from './FiltersContainer.module.css';

import FilterItemDropDownList from './FilterItem/FilterItemDropDownList/FilterItemDropDownList';
import FilterRangeItem from './FilterRangeItem/FilterRangeItem';
import FilterSuggestItem from './FiltersSuggestIem/FilterSuggestItem';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentGenresParams } from '../../../store/slice/MoviesPageSlices/FilterBySlice';
import { setAllCountriesFromServer } from '../../../store/slice/serverDataSlice/dataSlice';
import { setCurrentCountryParams } from '../../../store/slice/MoviesPageSlices/FilterBySlice';
import { setCurrentStartRatingParams } from '../../../store/slice/MoviesPageSlices/FilterBySlice';
import { setCurrentCountRatignParams } from '../../../store/slice/MoviesPageSlices/FilterBySlice';
import { setCurrentDirectorFilmParams } from '../../../store/slice/MoviesPageSlices/FilterBySlice';
import { setCurrentActorParams } from '../../../store/slice/MoviesPageSlices/FilterBySlice';

const FiltersContainer = () => {

    const { useState, useEffect } = React;

    useEffect(() => {
        fetch('http://localhost:12120/api/countries')
            .then(response => response.json())
            .then(data => dispatch(setAllCountriesFromServer({ value: data })))
    }, [])


    let allGenresSelector = useSelector((state: any) => state.AllData.allServerGenres)
    let genresTitle = {
        nameRU: 'Жанры:',
        nameEN: 'Genres:',
    }




    let allCountriesSelector = useSelector((state: any) => state.AllData.allServerCountries)
    let countryTitle = {
        nameRU: 'Страны:',
        nameEN: 'Countries:',
    }



    let dispatch = useDispatch();

    function giveMeGenresParamsCALLBACK(arg: number[]) {
        dispatch(setCurrentGenresParams({ value: arg }))
    }


    function giveMeCountriesParamsCALLBACK(arg: number[]) {
        dispatch(setCurrentCountryParams({ value: arg }))
    }


    let startRatingObj = {
        nameRU: 'Рейтинг больше чем:',
        nameEN: 'Rating more than:',
    }

    function giveMeStartRatingParamsCALLBACK(arg: number) {
        dispatch(setCurrentStartRatingParams({ value: arg }))
    }



    let countRatingObj = {
        nameRU: 'Количество оценок:',
        nameEN: 'Number of ratings:',
    }

    function giveMeCountOfRatingCALLBACK(arg: number) {
        dispatch(setCurrentCountRatignParams({ value: arg }))
    }







    let direcotrsTitleObj = {
        nameRU: 'Режисёр:',
        nameEN: 'Director:',
    }
    let emptyArr: {
        id: number,
        nameRU: string,
        nameEN: string,
    }[] = []
    let [direcotrsArr, setDirectorsArr] = useState(emptyArr);
    let diretcorID = 1;


    let actorsTitleObj = {
        nameRU: 'Актёр:',
        nameEN: 'Actor:',
    }

    let [actorArr, setAtorArr] = useState(emptyArr);
    let actorID = 2;


    useEffect(() => {
        fetch(`http://localhost:12120/api/film-members/profession/${diretcorID}`)
            .then(response => response.json())
            .then(data => {
                setDirectorsArr(data)
            })

        fetch(`http://localhost:12120/api/film-members/profession/${actorID}`)
            .then(response => response.json())
            .then(data => {
                setAtorArr(data)
            })
    }, [])


    function giveDirectorParamsCALLBACK(arg: {
        idMember: number | null,
        idProfession: number | null,
    }) {
        dispatch(setCurrentDirectorFilmParams({ value: arg }))
    }


    function giveActorParamsCALLBACK(arg: {
        idMember: number | null,
        idProfession: number | null,
    }) {
        dispatch(setCurrentActorParams({ value: arg }))
    }

    let globalGenresValue = useSelector((state: any) => state.MoviesFilterBy.currentGenresParams)
    let globalCountriesValue = useSelector((state: any) => state.MoviesFilterBy.currentCountryParams)


    return (
        <div className={classes.mainContainer}>
            <div className={classes.specialContainer}>
                <FilterItemDropDownList
                    globalValue={globalGenresValue}
                    basicTitle={genresTitle}
                    showValue={allGenresSelector}
                    callback={giveMeGenresParamsCALLBACK}
                    dropDownType='checkbox' />
                <FilterItemDropDownList
                    globalValue={globalCountriesValue}
                    basicTitle={countryTitle}
                    showValue={allCountriesSelector}
                    callback={giveMeCountriesParamsCALLBACK}
                    dropDownType='checkbox' />
                {/* <FilterItemDropDownList
                basicTitle={genresTitle}
                dropDownType='radio' /> */}
            </div>
            <div className={classes.specialContainer}>
                <FilterRangeItem
                    title={startRatingObj}
                    callback={giveMeStartRatingParamsCALLBACK}
                    max={10}
                    step={0.1} />
                <FilterRangeItem
                    title={countRatingObj}
                    callback={giveMeCountOfRatingCALLBACK}
                    max={500001}
                    step={5000}
                />
            </div>
            <div className={classes.specialContainer}>
                <FilterSuggestItem
                    title={direcotrsTitleObj}
                    findArr={direcotrsArr}
                    professionId={diretcorID}
                    callback={giveDirectorParamsCALLBACK}
                />
                <FilterSuggestItem
                    title={actorsTitleObj}
                    findArr={actorArr}
                    professionId={actorID}
                    callback={giveActorParamsCALLBACK}

                />
            </div>
        </div>
    );
};

export default FiltersContainer;