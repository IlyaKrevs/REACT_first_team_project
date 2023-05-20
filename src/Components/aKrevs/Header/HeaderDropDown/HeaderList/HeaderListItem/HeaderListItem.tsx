import React from 'react';
import classes from './HeaderListITem.module.css'

interface liProps {
    text: string,
}

const HeaderListItem = ({ text }: liProps) => {
    return (
        <li className={classes.liItem}>
            {text}
        </li>
    );
};

export default HeaderListItem;