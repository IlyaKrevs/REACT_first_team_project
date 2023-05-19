import React from 'react';
import classes from './MovingList.module.css'
import MovingListItem from './MovingListItem/MovingListItem';

interface MovingListProps {
    items: string[],
}

const MovingList = ({ items }: MovingListProps) => {

    const { useState } = React;
    let [hoverPos, setHoverPos] = useState(0);


    let movingStyle = {
        marginTop: (hoverPos * 28) + 'px',
    }

    return (
        <div className={classes.mainContainer}>

            <div className={classes.mainAxisSplitter}>
                <div className={classes.movingSplitter} style={movingStyle} ></div>
            </div>


            <ul className={classes.itemsContainer}>
                {items.map((elem, index) => {
                    return <MovingListItem text={elem} position={index} setHoverPos={setHoverPos} hoverPos={hoverPos} />
                })}
            </ul>
        </div>

    );
};

export default MovingList;