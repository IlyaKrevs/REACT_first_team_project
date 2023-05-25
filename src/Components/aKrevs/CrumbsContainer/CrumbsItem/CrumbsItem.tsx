import React from 'react';
import classes from './CrumbsItem.module.css';

interface CrumbsItemProps {
    text: string,
    link?: string | null,
}

const CrumbsItem = ({ text, link }: CrumbsItemProps) => {
    return (
        <li className={classes.crumbsLiItem}>

            {!link ? text :
                <a className={classes.crumbsLink} href={link}>
                    {text}
                </a>
            }
        </li>
    );
};

export default CrumbsItem;