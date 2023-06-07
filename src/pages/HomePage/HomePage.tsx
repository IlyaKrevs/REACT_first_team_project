import PageSection from '../../Components/aKrevs/PageSection/PageSection';
import BigSlider from '../../Components/aKrevs/BigSlider/BigSlider';
import Gallery from '../../Components/aKrevs/Gallery/Gallery';
import TeaserBtnsContainer from './HomePageContent/TeaserBtnsContainer/TeaserBtnsContainer';
import HomePageClause from './HomePageContent/HomePageClause/HomePageClause';
import HomePageTop10 from './HomePageContent/HomePageTop10/HomePageTop10';
import FilmCard from '../../Components/aKrevs/FilmCard/FilmCard';
import React from 'react';

type StateArrProps = {
    title: {
        id: number,
        nameRU: string,
        nameEN: string,
    },
    items: React.ReactNode[]
}[];


const HomePage = () => {

    const { useState, useEffect } = React;

    let emptyArr: StateArrProps = [];
    let [showGallerysArr, setShowGallerysArr] = useState(emptyArr);



    let howMuchGallery = 2;

    async function makeGalleryState(countOfGallery: number) {

        let genresArr: any[] = [];
        let generatedStateArr: any = [];
        let firstGenreID = 1;

        await fetch('http://localhost:12120/api/genres')
            .then(response => response.json())
            .then(data => {
                genresArr = data;
            })



        for (let i = 0; i < countOfGallery; i++) {

            await fetch('http://localhost:12120/api/films/filter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "arrIdGenres": [firstGenreID],
                    "part": 1,
                })
            })

                .then(resposne => resposne.json())

                .then(data => {
                    let myItemsArr: React.ReactNode[] = [];
                    for (let k = 0; k < data.length; k++) {
                        myItemsArr.push(<FilmCard key={k} fullObj={data[k]} />)
                    }

                    let result = {
                        title: genresArr[firstGenreID++ - 1],
                        items: myItemsArr,
                    }
                    generatedStateArr.push(result)
                })
        }
        setShowGallerysArr(generatedStateArr)
    }



    useEffect(() => {
        makeGalleryState(howMuchGallery)
    }, [])



    return (
        <>
            <BigSlider />

            <PageSection>
                <TeaserBtnsContainer />
            </PageSection>

            <PageSection>
                <HomePageTop10 />
            </PageSection>

            <PageSection>
                <HomePageClause />
            </PageSection>


            {showGallerysArr.length === howMuchGallery && showGallerysArr.map(item => {
                return <PageSection>
                    <Gallery children={item.items} titleText={item.title} />
                </PageSection>
            })}

        </>
    );
};

export default HomePage;