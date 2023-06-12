import React from 'react';
import classes from './AdminPanelGenres.module.css';
import { useSelector } from 'react-redux';
import PageSection from '../../../Components/aKrevs/PageSection/PageSection';





const AdminPanelGenres = () => {

    let authToken = 'Bearer' + ' ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1haWxAbWFpbC5pbyIsImlkIjoxLCJyb2xlIjp7ImlkIjoxLCJuYW1lIjoiQURNSU4iLCJkZXNjcmlwdGlvbiI6ItCw0LTQvNC40L3QuNGB0YLRgNCw0YLQvtGAIiwiY3JlYXRlZEF0IjoiMjAyMy0wNi0wMlQxNzowMToxOC45MTZaIiwidXBkYXRlZEF0IjoiMjAyMy0wNi0wMlQxNzowMToxOC45MTZaIn0sImlhdCI6MTY4NjU5ODIyNiwiZXhwIjoxNjg2Njg0NjI2fQ.uHBFUWJ5-OrApWuq5BWLcg9w8CnTDTIjgYMAZuB5xIc';


    const { useState, useEffect } = React;


    let simpleString: string = ''
    let simpleNumber: number = 0;

    let [createNameRU, setCreateNameRU] = useState(simpleString);
    let [createNameEN, setCreateNameEN] = useState(simpleString);


    async function createNewGenre() {
        fetch('http://localhost:12120/api/genres', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authToken,
            },
            body: JSON.stringify({
                nameRU: createNameRU,
                nameEN: createNameEN
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }


    let [updateId, setUpdateId] = useState(simpleNumber);
    let [updateNameRU, setUpdateNameRU] = useState(simpleString)
    let [updateNameEN, setUpdateNameEN] = useState(simpleString)


    async function updateGenreInfo() {
        fetch('http://localhost:12120/api/genres', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authToken,
            },
            body: JSON.stringify({
                id: updateId,
                nameRU: updateNameRU,
                nameEN: updateNameEN
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }


    let [deleteId, setDeleteId] = useState(simpleNumber);


    async function deleteGenre() {
        fetch(`http://localhost:12120/api/genres/${deleteId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authToken,
            },
            body: JSON.stringify({
                id: deleteId,
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }


    return (

        <PageSection>

            <div className={classes.mainPanelTitle}>Жанры:</div>
            <div className={classes.mainContainer}>

                <div className={classes.createPanel}>
                    <div className={classes.currentTitle}>
                        Create:
                    </div>
                    <div className={classes.panelContainer}>

                        !Названия не могут совпадать с уже существующими жанрами!

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



                        <button className={classes.myBtn}
                            onClick={() => createNewGenre()}
                        >
                            Создать новый жанр
                        </button>
                    </div>
                </div>



                <div className={classes.readPanel}>
                    <div className={classes.currentTitle}>
                        Read:
                    </div>
                    <div className={classes.panelContainer}>

                    </div>
                </div>

                <div className={classes.updatePanel}>
                    <div className={classes.currentTitle}>
                        Update:
                    </div>



                    <div className={classes.panelContainer}>

                        <div className={classes.inputMainContainer}>
                            <div className={classes.inputTitle}>
                                id изменяемого жанры (цифра):
                            </div>
                            <input type="text"
                                className={classes.inputField}
                                value={updateId}
                                onChange={(e) => setUpdateId(+e.currentTarget.value)}
                            />
                        </div>

                        <div className={classes.inputMainContainer}>
                            <div className={classes.inputTitle}>
                                nameRU (название на русском):
                            </div>
                            <input type="text"
                                className={classes.inputField}
                                value={updateNameRU}
                                onChange={(e) => setUpdateNameRU(e.currentTarget.value)}
                            />
                        </div>

                        <div className={classes.inputMainContainer}>
                            <div className={classes.inputTitle}>
                                nameEN (название на английском):
                            </div>
                            <input type="text"
                                className={classes.inputField}
                                value={updateNameEN}
                                onChange={(e) => setUpdateNameEN(e.currentTarget.value)}
                            />
                        </div>



                        <button className={classes.myBtn}
                            onClick={() => updateGenreInfo()}
                        >
                            Обновить информацию о жанре
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
                                id удаляемого жанра (цифра):
                            </div>
                            <input type="text"
                                className={classes.inputField}
                                value={deleteId}
                                onChange={(e) => setDeleteId(+e.currentTarget.value)}
                            />
                        </div>


                        <button className={classes.myBtn}
                            onClick={() => deleteGenre()}
                        >
                            Удалить жанр
                        </button>
                    </div>
                </div>

            </div>


        </PageSection>
    );
};

export default AdminPanelGenres;