import React from 'react';
import classes from './MoviesPage.module.css';

import PageSection from '../../Components/aKrevs/PageSection/PageSection';
import SortDropMenu from '../../Components/aKrevs/SortDropMenu/SortDropMenu';
import CrumbsContainer from '../../Components/aKrevs/CrumbsContainer/CrumbsContainer';
import FiltersContainer from '../../Components/aKrevs/FiltersContainer/FiltersContainer';
import FilmCard from '../../Components/aKrevs/FilmCard/FilmCard';
import { useSelector } from 'react-redux';
import RectangleBtn from '../../Components/aKrevs/Buttons/RectangleBtn/RectangleBtn';

interface queryBody {
    part: number,

    idArr: number[] | null,
    idCountriesArr: number[] | null,
    ratingStart: number | null,
    countRatingStart: number | null,
    yearStart: number | null,
    yearEnd: number | null,
    arrMembers: {
        idMember: number | null,
        idProfession: number | null,
    }[] | null,
    typeSorting: 'rating' | 'countRating' | 'year' | 'alphabetRU' | 'alphabetEN' | null,
}

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




    let sortingType = useSelector((state: any) => state.MoviesFilterBy.currentSortParams.queryParam)


    let queryBody: queryBody = {
        part: currentPart,

        idArr: null,
        idCountriesArr: null,
        ratingStart: null,
        countRatingStart: null,
        yearStart: null,
        yearEnd: null,
        arrMembers: null,
        typeSorting: sortingType,
    }


    async function giveMeFilms(askBody: queryBody) {

        let emptyArr: any = []
        let generatedStateArr: any = [];

        fetch('http://localhost:12120/api/films/filter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(askBody)
        })
            .then(response => response.json())
            .then(data => {
                emptyArr = data;
            })
            .then(() => {
                for (let i = 0; i < emptyArr.length; i++) {
                    generatedStateArr.push(<FilmCard key={i} fullObj={emptyArr[i]} />)
                }
                return generatedStateArr
            })
            .then((item) => {
                setCurrentShowArr((state: any) => [...state, item])
            })
            .then(() => setCanRender(true))
    }



    useEffect(() => {
        giveMeFilms(queryBody)
    }, [currentPart])

    useEffect(() => {
        if (currentShowArr.length) {
            setCurrentShowArr([])
            setCurrentPart(firstPart)
        }
    }, [sortingType])





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