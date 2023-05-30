import React from 'react';

import classes from './FilmCardHoverContainer.module.css'
import FilmCardHoverTopContainer from './Content/FilmCardHoverTopContainer/FilmCardHoverTopContainer';
import FilmCardHoverMiddleContainer from './Content/FilmCardHoverMiddleContainer/FilmCardHoverMiddleContainer';
import FilmCardHoverBtnContainer from './Btns/FilmCardHoverBtnContainer';
import FilmCardHoverContentItem from './Content/FilmCardHoverContentItem';
import FilmCardBottomContainer from './Content/FilmCardBottomContainer/FilmCardBottomContainer';
import { FilmCardProps } from '../../FilmCard';

const FilmCardHoverContainer = ({ fullObj }: FilmCardProps) => {
    return (
        <div className={classes.hoverContainer}>

            <FilmCardHoverBtnContainer />


            <div className={classes.propsContainer}>

                <FilmCardHoverContentItem >
                    <FilmCardHoverTopContainer fullObj={fullObj} />
                </FilmCardHoverContentItem>

                <FilmCardHoverContentItem >
                    <FilmCardHoverMiddleContainer fullObj={fullObj} />
                </FilmCardHoverContentItem>


                <FilmCardHoverContentItem >
                    <FilmCardBottomContainer fullObj={fullObj} />
                </FilmCardHoverContentItem>

            </div>
        </div >
    );
};

export default FilmCardHoverContainer;