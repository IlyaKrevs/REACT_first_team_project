import React from 'react';
import classes from './MovingListItem.module.css';


interface MovingListItemProps {
    text: string,
    position: number,
    setHoverPos: (a: number) => void,
    hoverPos: number,
}

const MovingListItem = ({ text, position, setHoverPos, hoverPos }: MovingListItemProps) => {

    let specialStyle;

    if (hoverPos === position) {
        specialStyle = {
            color: 'white',
        }
    }

    return (
        <li onMouseEnter={() => setHoverPos(position)} className={classes.liItem} style={specialStyle}>
            {text}
        </li>

    );
};

export default MovingListItem;