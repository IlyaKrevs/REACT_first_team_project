import React from 'react';
import classes from './HeaderTop.module.css';

import iviLogо from '../../../../assets/img/ivi_logo.svg';

import HeaderNavContainer from './HeaderNavContainer/HeaderNavContainer';
import HeaderUserContainer from './HeaderUserPanel/HeaderUserContainer/HeaderUserContainer';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../../../router';




const HeaderTop = () => {



    return (
        <div className={classes.headerTop}>
            <div className={classes.leftContainer}>

                <Link to={ROUTE.HOME}>
                    <div className={classes.logoContainer}>
                        <img src={iviLogо} alt="iviLogo" />
                    </div>
                </Link>

                <HeaderNavContainer />

            </div>
            <div className={classes.rightContainer}>
                <HeaderUserContainer />

            </div>
        </div>
    );
};

export default HeaderTop;