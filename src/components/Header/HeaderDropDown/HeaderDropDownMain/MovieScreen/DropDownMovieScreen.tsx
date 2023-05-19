import React from 'react';
import classes from './DropDownMovieScreen.module.css';

import HeaderList from '../../HeaderList/HeaderList';
import MovingList from '../../MovingList/MovingList';
import RectangleBtn from '../../../../Buttons/RectangleBtn/RectangleBtn';
import SubscribeWidget from '../../../SubscribeWidget/SubscribeWidget';


interface DropDownMovieScreenProps {
    firstList: string[],
    secondList: string[],
    thirdList: string[],
    moveList: string[],
}

const DropDownMovieScreen = ({ firstList, secondList, thirdList, moveList }: DropDownMovieScreenProps) => {
    return (
        <div className={classes.mainContainer}>

            <div className={classes.leftSideItemContainer}>


                <HeaderList title={
                    {
                        titleType: 'small',
                        titleText: 'Жанры',
                    }
                }
                    items={firstList} />

            </div>

            <div className={classes.leftSideItemContainer}>

                <HeaderList title={{
                    titleType: 'small',
                    titleText: 'Janri',
                }}
                    items={secondList} />


                <HeaderList title={{
                    titleType: 'small',
                    titleText: 'Janri',
                }}
                    items={thirdList} />


            </div>


            <div className={classes.rightSideContainer}>

                <MovingList items={moveList} />

                <SubscribeWidget />
            </div>


        </div>
    );
};

export default DropDownMovieScreen;