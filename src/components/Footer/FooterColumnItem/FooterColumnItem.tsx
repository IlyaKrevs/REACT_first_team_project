import React from 'react';
import classes from './FooterColumnitem.module.css';


interface FooterColumnProps {
    children: React.ReactNode,
    columnSize: string,
    specialGap?: boolean,
}

const FooterColumnItem = ({ children, columnSize, specialGap }: FooterColumnProps) => {

    let currentSize;

    if (columnSize === 'small') {
        currentSize = classes.smallSize
    } else if (columnSize === 'half') {
        currentSize = classes.halfSize;
    }

    let needGap = specialGap ? classes.btnsGap : ''

    return (
        <div className={[classes.column, currentSize, needGap].join(' ')}>
            {children}
        </div>
    );
};

export default FooterColumnItem;