import React from 'react';

import classes from './FilmCardHoverBtn.module.css'

interface BtnProps {
    icon: React.ReactNode,
    tooltipText: string,
}

const FilmCardHoverBtn = ({ icon, tooltipText }: BtnProps) => {
    return (
        <div className={classes.btn}>
            {icon}
            <div className={classes.tooltip}>
                {tooltipText}
            </div>
        </div>
    );
};

export default FilmCardHoverBtn;