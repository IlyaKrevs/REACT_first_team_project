import React from 'react';
import classes from './FooterContentItem.module.css';

interface FooterContentProps {
    children: React.ReactNode,
}

const FooterContentItem = ({ children }: FooterContentProps) => {
    return (
        <div className={classes.content}>
            {children}
        </div>
    );
};

export default FooterContentItem;