import classes from './Gallery.module.css';

import Carousel from '../Carousel/Carousel';
<<<<<<< HEAD
import FilmCard from '../FilmCard/FilmCard';
=======
import TitleText from '../Text/TitleText/TitleText';
import Arrow from '../Arrow/Arrow';
import { useSelector } from 'react-redux';

interface GalleryProps {
    children: React.ReactNode[];
    titleText: {
        id: number,
        nameRU: string,
        nameEN: string,
    }
}
>>>>>>> 127f6ec208cd31cfcf52992ad3c6bdc9adf2f858

const Gallery = ({ children, titleText }: GalleryProps) => {

    const isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian)

    let currentText;

    if (isRussian) {


<<<<<<< HEAD
        for (let i = 0; i < 20; i++) {
            myArr.push(<FilmCard key={i} />);
            myArr.push(<FilmCard key={i} />)
        }
        return myArr;
=======
        currentText = titleText.nameRU[0].toUpperCase() + titleText.nameRU.slice(1);
    } else {
        currentText = titleText.nameEN[0].toUpperCase() + titleText.nameEN.slice(1);
>>>>>>> 127f6ec208cd31cfcf52992ad3c6bdc9adf2f858
    }

    return (
        <div className={classes.mainContainer}>

<<<<<<< HEAD
            <Carousel children={make20items()} type='classic' emptyItem={true} />
=======
            <div className={classes.galleryTitleContainer}>
                <TitleText type='medium' text={currentText} />
                <Arrow size='medium' direction='right' />
            </div>

            <Carousel children={children} type='classic' emptyItem={true} />
>>>>>>> 127f6ec208cd31cfcf52992ad3c6bdc9adf2f858

        </div>
    );
};

export default Gallery;