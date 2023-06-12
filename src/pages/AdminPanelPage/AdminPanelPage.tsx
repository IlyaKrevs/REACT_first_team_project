import React from 'react';
import classes from './AdminPanelPage.module.css';
import PageSection from '../../Components/aKrevs/PageSection/PageSection';
import { useSelector } from 'react-redux';
import AdminPanelFilms from './Films/AdminPanelFilms';
import AdminPanelGenres from './Genres/AdminPanelGenres';



const AdminPanelPage = () => {

    let authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1haWxAbWFpbC5pbyIsImlkIjoxLCJyb2xlIjp7ImlkIjoxLCJuYW1lIjoiQURNSU4iLCJkZXNjcmlwdGlvbiI6ItCw0LTQvNC40L3QuNGB0YLRgNCw0YLQvtGAIiwiY3JlYXRlZEF0IjoiMjAyMy0wNi0wMlQxNzowMToxOC45MTZaIiwidXBkYXRlZEF0IjoiMjAyMy0wNi0wMlQxNzowMToxOC45MTZaIn0sImlhdCI6MTY4NjUxMzcyNSwiZXhwIjoxNjg2NjAwMTI1fQ.JStFncIWwafYslCkPUhDKjMgPn2ys-_dnu7C3EJ-zSo';





    const { useState, useEffect } = React;

    type desiredArr = {
        id: number,
        nameRU: string,
        nameEN: string,
    }[]

    let emptyArr: desiredArr = []
    let [allCountries, setAllCountries] = useState(emptyArr);
    let [allGenres, setAllGenres] = useState(emptyArr)

    let allCountriesURL = 'http://localhost:12120/api/countries';
    let allGenresURL = 'http://localhost:12120/api/genres';

    async function giveMeArrFrom(url: string) {
        return fetch(url)
            .then(item => item.json())
    }



    let allCountriesSelector = useSelector((state: any) => state.AllData.allServerCountries)
    let allGenresSelector = useSelector((state: any) => state.AllData.allServerGenres)

    useEffect(() => {
        giveMeArrFrom(allCountriesURL)
            .then(item => setAllCountries(item));
    }, [allCountriesSelector])


    useEffect(() => {
        giveMeArrFrom(allGenresURL)
            .then(item => setAllGenres(item));
    }, [allGenresSelector])

    return (

        <PageSection>

            <div className={classes.bigTitle}>
                Не представляю, как создать переиспользуемый компонент т.к. в первом и втором случае абсолютно разные тела запроса, разное количество полей и тд, поэтому делаю 2 разных компонента
            </div>

            <AdminPanelFilms />

            <AdminPanelGenres />














            <div className={classes.info}>
                <div className={classes.localTitle}>Все жанры:</div>
                <div className={classes.infoItemContainer}>
                    {allGenres.length && allGenres.map(item => {
                        return <div className={classes.infoItem}>
                            <p className={classes.idContainer}>id: {item.id}</p>
                            <p className={classes.nameRUcontainer}>nameRU: {item.nameRU}</p>
                            <p className={classes.nameENcontainer}>nameEN: {item.nameEN}</p>
                        </div>
                    })}
                </div>
            </div>



            <div className={classes.info}>
                <div className={classes.localTitle}>Все страны:</div>
                <div className={classes.infoItemContainer}>
                    {allCountries.length && allCountries.map(item => {
                        return <div className={classes.infoItem}>
                            <p className={classes.idContainer}>id: {item.id}</p>
                            <p className={classes.nameRUcontainer}>nameRU: {item.nameRU}</p>
                            <p className={classes.nameENcontainer}>nameEN: {item.nameEN}</p>
                        </div>
                    })}
                </div>
            </div>
        </PageSection>
    );
};

export default AdminPanelPage;