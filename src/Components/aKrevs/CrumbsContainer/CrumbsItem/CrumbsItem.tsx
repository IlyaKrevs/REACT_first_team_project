import React from 'react';
import classes from './CrumbsItem.module.css';
import { Link } from 'react-router-dom';

interface CrumbsItemProps {
    text: string | null,
    link?: boolean,
    linkTo: string,
}

const CrumbsItem = ({ text, link, linkTo }: CrumbsItemProps) => {
    return (
        <li className={classes.crumbsLiItem}>

            {!link ? text :
                <Link
                    className={classes.crumbsLink}
                    to={linkTo}>
                    {text}
                </Link>
            }
        </li>
    );
};

export default CrumbsItem;