import { Link } from 'react-router-dom';
import classes from './FilmCard.module.css'
import FilmCardImageSection from './ImageSection/FilmCardImageSection';
import FilmCardTextSection from './TextSection/FilmCardTextSection';
import { ROUTE } from '../../../router/routes';


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



    return (
        <Link to={`${ROUTE.HOME}${ROUTE.WATCH}/${fullObj.id}`}>
            <div className={classes.item}>

                <FilmCardImageSection fullObj={fullObj} />

                <FilmCardTextSection fullObj={fullObj} />
            </div>
        </Link>
    );
};

export default FilmCard;