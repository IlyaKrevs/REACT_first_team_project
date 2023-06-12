import React from 'react';
import classes from './AdminPanelGenres.module.css';
import { useSelector } from 'react-redux';
import PageSection from '../../../Components/aKrevs/PageSection/PageSection';





const AdminPanelGenres = () => {

    let authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1haWxAbWFpbC5pbyIsImlkIjoxLCJyb2xlIjp7ImlkIjoxLCJuYW1lIjoiQURNSU4iLCJkZXNjcmlwdGlvbiI6ItCw0LTQvNC40L3QuNGB0YLRgNCw0YLQvtGAIiwiY3JlYXRlZEF0IjoiMjAyMy0wNi0wMlQxNzowMToxOC45MTZaIiwidXBkYXRlZEF0IjoiMjAyMy0wNi0wMlQxNzowMToxOC45MTZaIn0sImlhdCI6MTY4NjUxMzcyNSwiZXhwIjoxNjg2NjAwMTI1fQ.JStFncIWwafYslCkPUhDKjMgPn2ys-_dnu7C3EJ-zSo';



    return (

        <PageSection>

            <div className={classes.mainPanelTitle}>Жанры:</div>
            <div className={classes.mainContainer}>

                <div className={classes.createPanel}>
                    <div className={classes.currentTitle}>
                        Create:
                    </div>
                    <div className={classes.panelContainer}>

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

                    </div>
                </div>

                <div className={classes.deletePanel}>
                    <div className={classes.currentTitle}>
                        Delete:
                    </div>
                    <div className={classes.panelContainer}>

                    </div>
                </div>

            </div>


        </PageSection>
    );
};

export default AdminPanelGenres;