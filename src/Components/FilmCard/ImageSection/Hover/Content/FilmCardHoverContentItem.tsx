import React from 'react';

import classes from './FilmCardHoverContentItem.module.css'

interface ItemProps {
    children?: React.ReactNode,
}

const FilmCardHoverContentItem = ({ children }: ItemProps) => {
    return (
        <div className={classes.item}>
            {children}
        </div>
    );
};

export default FilmCardHoverContentItem;