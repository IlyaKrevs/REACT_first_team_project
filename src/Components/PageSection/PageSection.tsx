import React from 'react';

import classes from './PageSection.module.css'


interface PageSectionItem {
    children: React.ReactNode,
}


const PageSection = ({ children }: PageSectionItem) => {
    return (
        <section className={classes.pageSection}>
            <div className={classes.pageSection__container}>
                {children}
            </div>
        </section>
    );
};

export default PageSection;