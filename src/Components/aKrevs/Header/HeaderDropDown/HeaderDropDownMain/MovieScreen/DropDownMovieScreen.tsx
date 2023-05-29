import React from 'react';
import classes from './DropDownMovieScreen.module.css';

import HeaderList from '../../HeaderList/HeaderList';
import MovingList from '../../MovingList/MovingList';
import SubscribeWidget from '../../../SubscribeWidget/SubscribeWidget';
import { useSelector } from 'react-redux';


interface DropDownMovieScreenProps {
    firstList: any,
    secondList: string[],
    thirdList: string[],
    moveList: string[],
}

const DropDownMovieScreen = ({ firstList, secondList, thirdList, moveList }: DropDownMovieScreenProps) => {

    let isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian)


    return (
        <div className={classes.mainContainer}>

            <div className={classes.leftSideItemContainer}>


                <HeaderList title={
                    {
                        titleType: 'small',
                        titleText: isRussian ? 'Жанры' : 'Genres',
                    }
                }
                    items={firstList} />

            </div>

            <div className={classes.leftSideItemContainer}>

                <HeaderList title={{
                    titleType: 'small',
                    titleText: isRussian ? '123' : '456',
                }}
                    items={secondList} />


                <HeaderList title={{
                    titleType: 'small',
                    titleText: isRussian ? '234' : '567',
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