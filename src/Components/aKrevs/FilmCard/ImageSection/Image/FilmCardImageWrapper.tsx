import classes from './FilmCardImageWrapper.module.css'
import { FilmCardProps } from '../../FilmCard';


const FilmCardImageWrapper = ({ fullObj }: FilmCardProps) => {
    return (
        <div className={classes.wrapper}>
            <img className={classes.imageProps} src={'http://localhost:12120/api/films/images/' + fullObj.imageName} />
        </div>
    );
};

export default FilmCardImageWrapper;