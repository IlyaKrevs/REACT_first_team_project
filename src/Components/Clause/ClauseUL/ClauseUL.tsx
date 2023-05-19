import React from 'react';

import classes from './ClauseUL.module.css';

interface ClauseUL {
    liArr: string[],
}

const ClauseUL = ({ liArr }: ClauseUL) => {
    return (
        <ul className={classes.clauseUl}>
            {liArr.map(item => {
                return <li className={classes.clauseLi}>{item}</li>
            })}
        </ul>
    );
};

export default ClauseUL;