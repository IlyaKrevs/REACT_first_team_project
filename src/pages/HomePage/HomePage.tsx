import React from 'react';
import Carousel from '../../Components/aKrevs/Carousel/Carousel';
import PageSection from '../../Components/aKrevs/PageSection/PageSection';

const HomePage = () => {
    return (
        <div>

            <PageSection>
                <Carousel type='classic' />
            </PageSection>
        </div>
    );
};

export default HomePage;