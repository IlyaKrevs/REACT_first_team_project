import classes from './FilmCard.module.css'
import FilmCardImageSection from './ImageSection/FilmCardImageSection';
import FilmCardTextSection from './TextSection/FilmCardTextSection';

<<<<<<< HEAD
const FilmCard = () => {
=======

export interface FilmCardProps {
    fullObj: {
        id: number,
        nameRU: string,
        nameEN: string,
        ageRating: string,
        rating: number,
        countRating: number,
        duration: number,
        year: number,

        country: {
            id: number,
            nameEN: string,
            nameRU: string,
        },

        genres: {
            id: number,
            nameEN: string,
            nameRU: string,
        }[],

        imageName: string,
    },
}



const FilmCard = ({ fullObj }: FilmCardProps) => {
>>>>>>> 127f6ec208cd31cfcf52992ad3c6bdc9adf2f858

    return (
        <div className={classes.item}>
<<<<<<< HEAD
            <FilmCardImageSection />
            <FilmCardTextSection />
=======

            <FilmCardImageSection fullObj={fullObj} />

            <FilmCardTextSection fullObj={fullObj} />
>>>>>>> 127f6ec208cd31cfcf52992ad3c6bdc9adf2f858
        </div>
    );
};

export default FilmCard;