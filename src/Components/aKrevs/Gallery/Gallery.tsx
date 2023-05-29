import classes from './Gallery.module.css';

import Carousel from '../Carousel/Carousel';
import FilmCard from '../FilmCard/FilmCard';

const Gallery = () => {

    let ruText = 'Современные мультфильмы';


    function make20items() {

        let myArr = [];

        for (let i = 0; i < 20; i++) {
            myArr.push(<FilmCard key={i} />);
        }
        return myArr;
    }


    return (
        <div className={classes.mainContainer}>

            <Carousel children={make20items()} type='classic' emptyItem={true} />

        </div>
    );
};

export default Gallery;