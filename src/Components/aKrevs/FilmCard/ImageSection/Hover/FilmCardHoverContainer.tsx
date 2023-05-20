import React from 'react';

import classes from './FilmCardHoverContainer.module.css'
import FilmCardHoverTopContainer from './Content/FilmCardHoverTopContainer/FilmCardHoverTopContainer';
import FilmCardHoverMiddleContainer from './Content/FilmCardHoverMiddleContainer/FilmCardHoverMiddleContainer';
import FilmCardHoverBtnContainer from './Btns/FilmCardHoverBtnContainer';
import FilmCardHoverContentItem from './Content/FilmCardHoverContentItem';
import FilmCardBottomContainer from './Content/FilmCardBottomContainer/FilmCardBottomContainer';

const FilmCardHoverContainer = () => {
    return (
        <div className={classes.hoverContainer}>

            <FilmCardHoverBtnContainer />


            <div className={classes.propsContainer}>

                <FilmCardHoverContentItem >
                    <FilmCardHoverTopContainer />
                </FilmCardHoverContentItem>

                <FilmCardHoverContentItem >
                    <FilmCardHoverMiddleContainer />
                </FilmCardHoverContentItem>


                <FilmCardHoverContentItem >
                    <FilmCardBottomContainer />
                </FilmCardHoverContentItem>

            </div>
        </div >
    );
};

export default FilmCardHoverContainer;