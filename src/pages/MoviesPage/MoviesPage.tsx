import React from 'react';
import classes from './MoviesPage.module.css';

import PageSection from '../../Components/aKrevs/PageSection/PageSection';
import SortDropMenu from '../../Components/aKrevs/SortDropMenu/SortDropMenu';
import CrumbsContainer from '../../Components/aKrevs/CrumbsContainer/CrumbsContainer';
import FiltersContainer from '../../Components/aKrevs/FiltersContainer/FiltersContainer';


const MoviesPage = () => {
    return (
        <>
            <PageSection>
                <CrumbsContainer />
            </PageSection>


            <PageSection>
                <SortDropMenu />
            </PageSection>

            <PageSection>
                <FiltersContainer />
            </PageSection>
        </>
    );
};

export default MoviesPage;