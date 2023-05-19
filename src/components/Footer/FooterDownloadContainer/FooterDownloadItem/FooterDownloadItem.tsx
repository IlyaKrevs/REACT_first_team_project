import React from 'react';
import classes from './FooterDownloadItem.module.css';

interface FooterDownloadItemProps {
    itemProps: {
        icon: React.ReactNode,
        special?: string,
        mainText: string,
    }
}



const FooterDownloadItem = ({ itemProps }: FooterDownloadItemProps) => {
    return (
        <div className={classes.mainContainer}>
            <div className={classes.imgContainer}>
                {itemProps.icon}
            </div>

            <div className={classes.textContainer}>
                {itemProps.special &&
                    <div className={classes.special}>{itemProps.special}</div>
                }
                <div className={classes.mainText}>
                    {itemProps.mainText}
                </div>
            </div>
        </div>
    );
};

export default FooterDownloadItem;