import React from 'react';

import classes from './PageSection.module.css'


interface PageSectionItem {
    children: React.ReactNode,
}


const PageSection = ({ children }: PageSectionItem) => {
    return (
        <section className={classes.mainContainer}>
            <div className={classes.innerContainer}>
                {children}
            </div>
        </section>
    );
};

export default PageSection;