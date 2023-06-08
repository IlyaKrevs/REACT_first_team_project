import React from 'react';
import classes from './MoviesPage.module.css';

import PageSection from '../../Components/aKrevs/PageSection/PageSection';
import SortDropMenu from '../../Components/aKrevs/SortDropMenu/SortDropMenu';
import CrumbsContainer from '../../Components/aKrevs/CrumbsContainer/CrumbsContainer';
import FiltersContainer from '../../Components/aKrevs/FiltersContainer/FiltersContainer';
import FilmCard from '../../Components/aKrevs/FilmCard/FilmCard';
import { useSelector } from 'react-redux';
import RectangleBtn from '../../Components/aKrevs/Buttons/RectangleBtn/RectangleBtn';



const MoviesPage = () => {
    let currentBtnText;
    let btnTextRu = 'Показать ещё';
    let btnTextEN = 'Show more'
    let isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian)

    if (isRussian) {
        currentBtnText = btnTextRu;
    } else {
        currentBtnText = btnTextEN;
    }


    const { useState, useEffect } = React;

    let firstPart = 1;
    let [currentPart, setCurrentPart] = useState(firstPart);

    let emptyArr: any = [];
    let [currentShowArr, setCurrentShowArr] = useState(emptyArr);
    let [canRender, setCanRender] = useState(false);




    let sortingType = useSelector((state: any) => state.MoviesFilterBy.currentSortParams.queryParam);
    let idGenresArrSelector = useSelector((state: any) => state.MoviesFilterBy.currentGenresParams);
    let idCountryArrSelector = useSelector((state: any) => state.MoviesFilterBy.currentCountryParams);
    let startRatingSelector = useSelector((state: any) => state.MoviesFilterBy.currentStartRatingParams);
    let countRatingSelector = useSelector((state: any) => state.MoviesFilterBy.currentCountRatingParams);
    let directorFilmSelector = useSelector((state: any) => state.MoviesFilterBy.currentDirectorFilmParams);
    let actorSelector = useSelector((state: any) => state.MoviesFilterBy.currentActorParams);


    let memberTypeArr: {
        idMember: number,
        idProfession: number,
    }[] = [];
    let [memberFilterArr, setMemberFilterArr] = useState(memberTypeArr)


    useEffect(() => {
        if (directorFilmSelector.idMember && actorSelector.idMember) {
            setMemberFilterArr([directorFilmSelector, actorSelector])
        } else if (directorFilmSelector.idMember) {
            setMemberFilterArr([directorFilmSelector])
        } else if (actorSelector.idMember) {
            setMemberFilterArr([actorSelector])
        } else {
            setMemberFilterArr([])
        }
    }, [directorFilmSelector, actorSelector])





    async function giveMeFilms(changeParams: boolean = false) {

        let emptyArr: any = []
        let generatedStateArr: any = [];


        return fetch('http://localhost:12120/api/films/filter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                arrIdGenres: idGenresArrSelector.length ? idGenresArrSelector : null,
                arrIdCountries: idCountryArrSelector.length ? idCountryArrSelector : null,
                ratingStart: startRatingSelector ? startRatingSelector : null,
                countRatingStart: countRatingSelector ? countRatingSelector : null,
                yearStart: null,
                yearEnd: null,
                arrMembersFilterDto: memberFilterArr.length ? memberFilterArr : null,
                part: changeParams ? 1 : currentPart,
                typeSorting: sortingType
            })
        })
            .then(response => response.json())
            .then(data => {
                emptyArr = data;
            })
            .then(() => {
                for (let i = 0; i < emptyArr.length; i++) {
                    generatedStateArr.push(<FilmCard key={i} fullObj={emptyArr[i]} />)
                }
                if (changeParams) {
                    setCurrentPart(1)
                }
                return generatedStateArr
            })

    }





    useEffect(() => {
        giveMeFilms(true)
            .then(item => {
                if (item.length) {
                    setCurrentShowArr(item)
                }
            })
            .then(() => setCanRender(true))

    }, [idGenresArrSelector, idCountryArrSelector, startRatingSelector, countRatingSelector, memberFilterArr, sortingType,])


    useEffect(() => {
        if (currentPart === 1) return;
        giveMeFilms()
            .then(item => {
                if (item.length) {
                    setCurrentShowArr((state: any) => [...state, item])
                }
            })
            .then(() => setCanRender(true))
    }, [currentPart,])



    return (
        <>
            <PageSection>
                <CrumbsContainer />
            </PageSection>


            <PageSection>
                <SortDropMenu />
            </PageSection>

            <PageSection>
                <FiltersContainer />
            </PageSection>


            <PageSection>
                <div className={classes.specialContainer}>
                    <div className={classes.moviesPageShowFilms}>
                        {canRender && currentShowArr}
                    </div>
                    <div onClick={() => setCurrentPart(state => state + 1)}>
                        <RectangleBtn text={currentBtnText} color='light' />
                    </div>
                </div>
            </PageSection>
        </>
    );
};

export default MoviesPage;