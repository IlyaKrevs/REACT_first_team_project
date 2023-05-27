import React from 'react';
import classes from './FiltersRadioItem.module.css';

interface FiltersRadioItemProps {
    text: string,
    currentState: string,
    callback: (arg: string) => void,
}

const FiltersRadioItem = ({ text, currentState, callback }: FiltersRadioItemProps) => {

    let radioIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" /></svg>



    let isChosen;
    if (currentState === text) {
        isChosen = classes.isChosen;
    } else {
        isChosen = null;
    }

    return (
        <div
            onClick={() => callback(text)}
            className={[classes.mainContainer, isChosen].join(' ')}>
            {text}
            <div className={[classes.iconContainer, isChosen].join(' ')}>
                {radioIcon}
            </div>
        </div>
    );
};

export default FiltersRadioItem;