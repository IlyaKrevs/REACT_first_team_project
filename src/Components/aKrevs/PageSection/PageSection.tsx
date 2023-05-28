import React from 'react';

import classes from './PageSection.module.css'
import { useDispatch } from 'react-redux';
import { resetCurrentViewScreen } from '../../../store/slice/MoviesPageSlices/FilterBySlice';

interface PageSectionItem {
    children: React.ReactNode,
}


const PageSection = ({ children, }: PageSectionItem) => {

    let dispatch = useDispatch();


    return (
        <section
            onClick={() => dispatch(resetCurrentViewScreen(''))}
            className={classes.mainContainer}>
            <div className={classes.innerContainer}>
                {children}
            </div>
        </section>
    );
};

export default PageSection;