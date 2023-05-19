import React from 'react';
import TitleText from '../../../Text/TitleText/TitleText';
import classes from './HeaderList.module.css';
import HeaderListItem from './HeaderListItem/HeaderListItem';


interface HeaderListProps {
    title?: {
        titleType: string,
        titleText: string,
    }
    items: string[],
}

const HeaderList = ({ title, items }: HeaderListProps) => {
    return (
        <div className={classes.mainList}>

            {title && <TitleText type={title.titleType} text={title.titleText} />}

            <ul className={classes.listContainer}>
                {items.map(elem => {
                    return <HeaderListItem text={elem} />
                })}
            </ul>
        </div >
    );
};

export default HeaderList;