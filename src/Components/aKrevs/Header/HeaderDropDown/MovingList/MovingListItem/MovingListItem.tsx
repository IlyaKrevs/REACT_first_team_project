import React from 'react';
import classes from './MovingListItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setMovingItemPos } from '../../../../../../store/slice/HeaderSlices/movingListSlice';


interface MovingListItemProps {
    text: string,
    position: number,
}

const MovingListItem = ({ text, position, }: MovingListItemProps) => {

    const currentPos = useSelector((state: any) => state.HeaderMovingList.movingItemPos)

    let dispatch = useDispatch();

    function setCurrentPos(arg: number) {
        dispatch(setMovingItemPos({ value: arg }));
    }

    let specialStyle;

    if (currentPos === position) {
        specialStyle = {
            color: 'white',
        }
    }

    return (
        <li onMouseEnter={() => setCurrentPos(position)} className={classes.liItem} style={specialStyle}>
            {text}
        </li>

    );
};

export default MovingListItem;