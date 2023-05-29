import React from 'react';
import classes from './MovingList.module.css'
import MovingListItem from './MovingListItem/MovingListItem';
import { useSelector } from 'react-redux';

interface MovingListProps {
    items: string[],
}

const MovingList = ({ items }: MovingListProps) => {

    let currentPos = useSelector((state: any) => state.HeaderMovingList.movingItemPos)


    let movingStyle = {
        marginTop: (currentPos * 28) + 'px',
    }

    return (
        <div className={classes.mainContainer}>

            <div className={classes.mainAxisSplitter}>
                <div className={classes.movingSplitter} style={movingStyle} ></div>
            </div>


            <ul className={classes.itemsContainer}>
                {items.map((elem, index) => {
                    return <MovingListItem text={elem} position={index} key={index} />
                })}
            </ul>
        </div>

    );
};

export default MovingList;