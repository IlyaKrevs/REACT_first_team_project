import React from 'react';
import classes from './DropDownTVPlusScreen.module.css';

import HeaderList from '../../HeaderList/HeaderList';
import RectangleBtn from '../../../../Buttons/RectangleBtn/RectangleBtn';
import SubscribeWidget from '../../../SubscribeWidget/SubscribeWidget';

interface DropDownTVPlusScreen {
    sideContent: string[],
}


const DropDownTVPlusScreen = ({ sideContent }: DropDownTVPlusScreen) => {


    return (
        <div className={classes.mainContainer}>

            <div className={classes.sideContent}>
                <HeaderList title={{
                    titleType: 'small',
                    titleText: 'ТВ-каналы',
                }} items={sideContent} />


                <RectangleBtn text='TVprogramm' color='light' />
            </div>


            <div className={classes.mainContent}>


                <SubscribeWidget />
            </div>
        </div>
    );
};

export default DropDownTVPlusScreen;