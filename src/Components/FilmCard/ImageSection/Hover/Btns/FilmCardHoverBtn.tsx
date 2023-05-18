import React from 'react';

import classes from './FilmCardHoverBtn.module.css'

interface BtnProps {
    icon: React.ReactNode,
    tooltipText: string,
}


const FilmCardHoverBtn = ({ icon, tooltipText }: BtnProps) => {

    const { useState } = React;

    let [isShow, setIsShow] = useState(false)

    function showToolptip() {
        setIsShow(true)
    }

    function hideTooltip() {
        setIsShow(false)
    }


    return (
        <div
            onMouseEnter={showToolptip}
            onMouseLeave={hideTooltip}
            className={classes.btnContainer} >

            {icon}

            {isShow &&
                <div
                    onMouseEnter={hideTooltip}
                    className={classes.tooltip} >
                    {tooltipText}
                </div >
            }
        </div >
    );
};

export default FilmCardHoverBtn;