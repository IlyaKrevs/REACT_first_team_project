import classes from './FilmCardHoverTopContainer.module.css'
import FilmCardRatingLine from '../../RatingLine/FilmCardRatingLine';
import { FilmCardProps } from '../../../../FilmCard';

const FilmCardHoverTopContainer = ({ fullObj }: FilmCardProps) => {

    let thisSize = 'small';

    let progressArr = [30, 40, 50, 60];

    let showRating: string = (Math.round(fullObj.rating * 10) / 10).toString();

    if (showRating.length < 2) {
        showRating = showRating + '.0';
    }

    return (
        <div className={classes.container}>
            <div className={classes.text}>{showRating}</div>
            <div className={classes.ratingContainer}>
                {progressArr.map((item, index) => {
                    return <FilmCardRatingLine key={index} size={thisSize} progressValue={item} />
                })}
            </div>

        </div>
    );
};

export default FilmCardHoverTopContainer;