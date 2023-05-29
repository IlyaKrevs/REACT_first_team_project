import React from 'react';
import TitleText from '../../../Text/TitleText/TitleText';
import classes from './HeaderList.module.css';
import HeaderListItem from './HeaderListItem/HeaderListItem';


interface HeaderListProps {
    title?: {
        titleType: 'big' | 'medium' | 'small',
        titleText: string,
    }
    items: any,
}



const HeaderList = ({ title, items }: HeaderListProps) => {




    return (
        <div className={classes.mainList}>

            {title && <TitleText type={title.titleType} text={title.titleText} />}

            <ul className={classes.listContainer}>
                {items.map((elem: any) => {
                    return <HeaderListItem fullObj={elem.id} />
                })}

            </ul>
        </div >
    );
};

export default HeaderList;