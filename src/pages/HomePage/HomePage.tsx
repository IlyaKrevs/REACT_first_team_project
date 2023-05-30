import PageSection from '../../Components/aKrevs/PageSection/PageSection';
import BigSlider from '../../Components/aKrevs/BigSlider/BigSlider';
import Gallery from '../../Components/aKrevs/Gallery/Gallery';
import TeaserBtnsContainer from './HomePageContent/TeaserBtnsContainer/TeaserBtnsContainer';
import HomePageClause from './HomePageContent/HomePageClause/HomePageClause';
import HomePageTop10 from './HomePageContent/HomePageTop10/HomePageTop10';
import FilmCard from '../../Components/aKrevs/FilmCard/FilmCard';


const HomePage = () => {

<<<<<<< HEAD
=======
    const { useState, useEffect } = React;


    let emptyArr: {
        title: {
            id: number,
            nameRU: string,
            nameEN: string,
        },
        items: React.ReactNode[]
    }[] = [];
    let [showGallery, setShowGallery] = useState(emptyArr);



    let howMuchGallery = 2;

    function makeGalleryState(countOfGallery: number) {

        let genresArr: any[] = [];
        fetch('http://localhost:12120/api/genres')
            .then(response => response.json())
            .then(data => {
                genresArr = data;
            })



        for (let i = 0; i < countOfGallery; i++) {

            fetch('http://localhost:12120/api/films/filter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "arrIdGenres": [i + 1],
                    "part": 1,
                })
            })

                .then(resposne => resposne.json())

                .then(data => {
                    let myItemsArr: React.ReactNode[] = [];
                    for (let k = 0; k < 20; k++) {
                        myItemsArr.push(<FilmCard key={k} fullObj={data[k]} />)
                    }

                    let result = {
                        title: genresArr[i],
                        items: myItemsArr,
                    }

                    setShowGallery((state: any[]) => [...state, result])
                })
        }

    }

    useEffect(() => {
        makeGalleryState(howMuchGallery)
    }, [])



>>>>>>> 127f6ec208cd31cfcf52992ad3c6bdc9adf2f858
    return (
        <>
            <BigSlider />

            <PageSection>
                <TeaserBtnsContainer />
            </PageSection>

            <PageSection>
                <HomePageTop10 />
            </PageSection>

<<<<<<< HEAD
            <PageSection >
                <Gallery />
            </PageSection>

=======
>>>>>>> 127f6ec208cd31cfcf52992ad3c6bdc9adf2f858
            <PageSection>
                <HomePageClause />
            </PageSection>

<<<<<<< HEAD
            <PageSection >
                <Gallery />
            </PageSection>
=======

            {showGallery.length === howMuchGallery && showGallery.map(item => {
                return <PageSection>
                    <Gallery children={item.items} titleText={item.title} />
                </PageSection>
            })}

>>>>>>> 127f6ec208cd31cfcf52992ad3c6bdc9adf2f858
        </>
    );
};

export default HomePage;