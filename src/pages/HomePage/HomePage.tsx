import React from 'react';
import classes from './HomePage.module.css';

import PageSection from '../../Components/aKrevs/PageSection/PageSection';
import BigSlider from '../../Components/aKrevs/BigSlider/BigSlider';
import Gallery from '../../Components/aKrevs/Gallery/Gallery';
import TeaserBtnsContainer from './HomePageContent/TeaserBtnsContainer/TeaserBtnsContainer';
import HomePageClause from './HomePageContent/HomePageClause/HomePageClause';
import HomePageTop10 from './HomePageContent/HomePageTop10/HomePageTop10';



const HomePage = () => {




    return (
        <>
            <BigSlider />

            <PageSection>
                <TeaserBtnsContainer />
            </PageSection>

            <PageSection>
                <HomePageTop10 />
            </PageSection>

            <PageSection >
                <Gallery />
            </PageSection>


            <PageSection>
                <HomePageClause />
            </PageSection>

            <PageSection >
                <Gallery />
            </PageSection>



        </>
    );
};

export default HomePage;