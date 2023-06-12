import React from 'react';
import classes from './AdminPanelFilms.module.css';
import { useSelector } from 'react-redux';
import PageSection from '../../../Components/aKrevs/PageSection/PageSection';





const AdminPanelFilms = () => {

    let authToken = 'Bearer' + ' ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1haWxAbWFpbC5pbyIsImlkIjoxLCJyb2xlIjp7ImlkIjoxLCJuYW1lIjoiQURNSU4iLCJkZXNjcmlwdGlvbiI6ItCw0LTQvNC40L3QuNGB0YLRgNCw0YLQvtGAIiwiY3JlYXRlZEF0IjoiMjAyMy0wNi0wMlQxNzowMToxOC45MTZaIiwidXBkYXRlZEF0IjoiMjAyMy0wNi0wMlQxNzowMToxOC45MTZaIn0sImlhdCI6MTY4NjU5ODIyNiwiZXhwIjoxNjg2Njg0NjI2fQ.uHBFUWJ5-OrApWuq5BWLcg9w8CnTDTIjgYMAZuB5xIc';



    const { useState, useEffect } = React;

    let simpleString: string = ''
    let simpleNumber: number = 0;

    let [createNameRU, setCreateNameRU] = useState(simpleString);
    let [createNameEN, setCreateNameEN] = useState(simpleString);

    let [createYear, setCreateYear] = useState(simpleNumber);

    let [createAgeRating, setCreateAgeRating] = useState(simpleString);

    let [createDuration, setCreateDuration] = useState(simpleNumber);

    let [createText, setCreateText] = useState(simpleString);
    let [createTrailerLink, setCreateTrailerLink] = useState(simpleString);

    let [createIdCountry, setCreateIdCountry] = useState(simpleNumber);

    let [createArrIdGenres, setCreateArrIdGenres] = useState(simpleString);



    async function createNewFilm() {
        fetch('http://localhost:12120/api/films', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authToken,
            },
            body: JSON.stringify({
                nameRU: createNameRU,
                nameEN: createNameEN,
                year: createYear,
                ageRating: createAgeRating,
                duration: createDuration,
                text: createText,
                trailerLink: createTrailerLink,
                idCountry: createIdCountry,
                arrIdGenres: createArrIdGenres.split(' ')
            })
        })
            .then(respone => respone.json())
            .then(data => setReadId(data.id))
            .catch(err => console.log(err))
    }






    let [readId, setReadId] = useState(simpleNumber);
    let anything: any;
    let [responseValue, setResponceValue] = useState(anything)


    async function readFilmFromId() {
        fetch(`http://localhost:12120/api/films/${readId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(respone => respone.json())
            .then(data => {
                console.log(data)
                setResponceValue(data)
            })
    }



    let [updateId, setUpdateId] = useState(simpleNumber);
    let [updateNameRU, setNameRU] = useState(simpleString);
    let [updateNameEN, setNameEN] = useState(simpleString);
    let [updateYear, setYear] = useState(simpleNumber);
    let [updateAgeRating, setAgeRating] = useState(simpleString);
    let [updateDuration, setDuration] = useState(simpleNumber);
    let [updateIdCountry, setCountry] = useState(simpleNumber);
    let [updateArrIdGenres, setArrIdGenres] = useState(simpleString);


    async function updateFilmInfo() {
        fetch('http://localhost:12120/api/films', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authToken,
            },
            body: JSON.stringify({
                id: updateId,
                nameRU: updateNameRU,
                nameEN: updateNameEN,
                year: updateYear,
                ageRating: updateAgeRating,
                duration: updateDuration,
                idCountry: updateIdCountry,
                arrIdGenres: updateArrIdGenres.split(' ')
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }

    let [deleteIdFilm, setDeleteIdFilm] = useState(simpleNumber);

    async function deleteFilm() {
        fetch(`http://localhost:12120/api/films/${deleteIdFilm}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authToken,
            },
            body: JSON.stringify({
                id: deleteIdFilm,
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }

    return (

        <PageSection>

            <div className={classes.mainPanelTitle}>Фильмы:</div>
            <div className={classes.mainContainer}>



                <div className={classes.createPanel}>
                    <div className={classes.currentTitle}>
                        Create:
                    </div>
                    <div className={classes.panelContainer}>

                        <div className={classes.inputMainContainer}>
                            <div className={classes.inputTitle}>
                                nameRU (название на русском):
                            </div>
                            <input type="text"
                                className={classes.inputField}
                                value={createNameRU}
                                onChange={(e) => setCreateNameRU(e.currentTarget.value)}
                            />
                        </div>



                        <div className={classes.inputMainContainer}>
                            <div className={classes.inputTitle}>
                                nameEN (название на английском):
                            </div>
                            <input type="text"
                                className={classes.inputField}
                                value={createNameEN}
                                onChange={(e) => setCreateNameEN(e.currentTarget.value)}
                            />
                        </div>


                        <div className={classes.inputMainContainer}>
                            <div className={classes.inputTitle}>
                                year (2007):
                            </div>
                            <input type="text"
                                className={classes.inputField}
                                value={createYear}
                                onChange={(e) => setCreateYear(+e.currentTarget.value)}
                            />
                        </div>



                        <div className={classes.inputMainContainer}>
                            <div className={classes.inputTitle}>
                                ageRaing (+16):
                            </div>
                            <input type="text"
                                className={classes.inputField}
                                value={createAgeRating}
                                onChange={(e) => setCreateAgeRating(e.currentTarget.value)}
                            />
                        </div>



                        <div className={classes.inputMainContainer}>
                            <div className={classes.inputTitle}>
                                duration (длительность в минутах):
                            </div>
                            <input type="text"
                                className={classes.inputField}
                                value={createDuration}
                                onChange={(e) => setCreateDuration(+e.currentTarget.value)}
                            />
                        </div>



                        <div className={classes.inputMainContainer}>
                            <div className={classes.inputTitle}>
                                text (описание):
                            </div>
                            <input type="text"
                                className={classes.inputField}
                                value={createText}
                                onChange={(e) => setCreateText(e.currentTarget.value)}
                            />
                        </div>



                        <div className={classes.inputMainContainer}>
                            <div className={classes.inputTitle}>
                                trailerLink (ссылка на трейлер):
                            </div>
                            <input type="text"
                                className={classes.inputField}
                                value={createTrailerLink}
                                onChange={(e) => setCreateTrailerLink(e.currentTarget.value)}
                            />
                        </div>



                        <div className={classes.inputMainContainer}>
                            <div className={classes.inputTitle}>
                                idCountry (id страны, строго 1 цифра):
                            </div>
                            <input type="text"
                                className={classes.inputField}
                                value={createIdCountry}
                                onChange={(e) => setCreateIdCountry(+e.currentTarget.value)}
                            />
                        </div>



                        <div className={classes.inputMainContainer}>
                            <div className={classes.inputTitle}>
                                arrIdGenres (id жанров, строго через 1 пробел):
                            </div>
                            <input type="text"
                                className={classes.inputField}
                                value={createArrIdGenres}
                                onChange={(e) => setCreateArrIdGenres(e.currentTarget.value)}
                            />
                        </div>

                        <button className={classes.myBtn}
                            onClick={() => createNewFilm()}
                        >
                            Создать фильм
                        </button>
                    </div>
                </div>





                <div className={classes.readPanel}>
                    <div className={classes.currentTitle}>
                        Read:
                    </div>

                    <div className={classes.panelContainer}>
                        <div className={classes.inputMainContainer}>
                            <div className={classes.inputTitle}>
                                id фильма  (число)  (!обновляется после создания нового фильма!):
                            </div>
                            <input type="text"
                                className={classes.inputField}
                                value={readId}
                                onChange={(e) => setReadId(+e.currentTarget.value)}
                            />
                        </div>
                        <button className={classes.myBtn}
                            onClick={() => readFilmFromId()}
                        >Получить информацию о фильме
                        </button>

                        <div className={classes.inputTitle}>
                            id фильма:  {responseValue && responseValue.id}
                        </div>
                        <div className={classes.inputTitle}>
                            nameRU: {responseValue && responseValue.nameRU}
                        </div>
                        <div className={classes.inputTitle}>
                            nameEN: {responseValue && responseValue.nameEN}
                        </div>
                        <div className={classes.inputTitle}>
                            year: {responseValue && responseValue.year}
                        </div>
                        <div className={classes.inputTitle}>
                            ageRaing: {responseValue && responseValue.ageRating}
                        </div>
                        <div className={classes.inputTitle}>
                            duration: {responseValue && responseValue.duration}
                        </div>
                        <div className={classes.inputTitle}>
                            id genres: {responseValue && responseValue.genres.map((item: any) => item.id).join(', ')}
                        </div>
                        <div className={classes.inputTitle}>
                            id country: {responseValue && responseValue.idCountry}
                        </div>

                        <div className={classes.inputTitle}>
                            img name: {responseValue && responseValue.imageName}
                        </div>

                        <div className={classes.inputTitle}>
                            rating: {responseValue && responseValue.rating}
                        </div>

                        <div className={classes.inputTitle}>
                            countRating: {responseValue && responseValue.countRating}
                        </div>
                    </div>
                </div>













                <div className={classes.updatePanel}>
                    <div className={classes.currentTitle}>
                        Update:
                    </div>
                    <div className={classes.panelContainer}>

                        <div className={classes.inputMainContainer}>
                            <div className={classes.inputTitle}>
                                id фильма который будем менять:
                            </div>
                            <input type="text"
                                className={classes.inputField}
                                value={updateId}
                                onChange={(e) => setUpdateId(+e.currentTarget.value)}
                            />
                        </div>


                        <div className={classes.inputMainContainer}>
                            <div className={classes.inputTitle}>
                                новое NameRU:
                            </div>
                            <input type="text"
                                className={classes.inputField}
                                value={updateNameRU}
                                onChange={(e) => setNameRU(e.currentTarget.value)}
                            />
                        </div>


                        <div className={classes.inputMainContainer}>
                            <div className={classes.inputTitle}>
                                новое NameEN:
                            </div>
                            <input type="text"
                                className={classes.inputField}
                                value={updateNameEN}
                                onChange={(e) => setNameEN(e.currentTarget.value)}
                            />
                        </div>

                        <div className={classes.inputMainContainer}>
                            <div className={classes.inputTitle}>
                                новое year:
                            </div>
                            <input type="text"
                                className={classes.inputField}
                                value={updateYear}
                                onChange={(e) => setYear(+e.currentTarget.value)}
                            />
                        </div>



                        <div className={classes.inputMainContainer}>
                            <div className={classes.inputTitle}>
                                новое ageRating:
                            </div>
                            <input type="text"
                                className={classes.inputField}
                                value={updateAgeRating}
                                onChange={(e) => setAgeRating(e.currentTarget.value)}
                            />
                        </div>


                        <div className={classes.inputMainContainer}>
                            <div className={classes.inputTitle}>
                                новое duration:
                            </div>
                            <input type="text"
                                className={classes.inputField}
                                value={updateDuration}
                                onChange={(e) => setDuration(+e.currentTarget.value)}
                            />
                        </div>



                        <div className={classes.inputMainContainer}>
                            <div className={classes.inputTitle}>
                                новое idCountry (строго 1 цифра):
                            </div>
                            <input type="text"
                                className={classes.inputField}
                                value={updateIdCountry}
                                onChange={(e) => setCountry(+e.currentTarget.value)}
                            />
                        </div>



                        <div className={classes.inputMainContainer}>
                            <div className={classes.inputTitle}>
                                новое arrIdGenres (минимум 1 цифра строго через пробел):
                            </div>
                            <input type="text"
                                className={classes.inputField}
                                value={updateArrIdGenres}
                                onChange={(e) => setArrIdGenres(e.currentTarget.value)}
                            />
                        </div>


                        <button className={classes.myBtn}
                            onClick={() => updateFilmInfo()}
                        >Изменить информацию о фильме
                        </button>
                    </div>
                </div>



                <div className={classes.deletePanel}>
                    <div className={classes.currentTitle}>
                        Delete:
                    </div>
                    <div className={classes.panelContainer}>

                        <div className={classes.inputMainContainer}>
                            <div className={classes.inputTitle}>
                                id удаляемого фильма:
                            </div>
                            <input type="text"
                                className={classes.inputField}
                                value={deleteIdFilm}
                                onChange={(e) => setDeleteIdFilm(+e.currentTarget.value)}
                            />
                        </div>

                        <button className={classes.myBtn}
                            onClick={() => deleteFilm()}
                        >Удалить фильм
                        </button>
                    </div>
                </div>

            </div>

        </PageSection>
    );
};

export default AdminPanelFilms;