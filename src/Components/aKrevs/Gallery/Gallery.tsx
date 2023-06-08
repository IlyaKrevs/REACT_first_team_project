import classes from './Gallery.module.css';

import Carousel from '../Carousel/Carousel';
import TitleText from '../Text/TitleText/TitleText';
import Arrow from '../Arrow/Arrow';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../../router/routes';
import { setCurrentGenresParams } from '../../../store/slice/MoviesPageSlices/FilterBySlice';

interface GalleryProps {
  children: React.ReactNode[];
  titleText: {
    id: number;
    nameRU: string;
    nameEN: string;
  };
}

const Gallery = ({ children, titleText }: GalleryProps) => {
  const isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian);
  let currentText = '';

  if (titleText && titleText.nameRU && titleText.nameEN) {
    if (isRussian) {
      currentText = titleText.nameRU.charAt(0).toUpperCase() + titleText.nameRU.slice(1);
    } else {
      currentText = titleText.nameEN.charAt(0).toUpperCase() + titleText.nameEN.slice(1);
    }
  }


  let dispatch = useDispatch();



  return (
    <div className={classes.mainContainer}>
      <div className={classes.galleryTitleContainer}
        onClick={() => dispatch(setCurrentGenresParams({ value: [titleText.id] }))}
      >
        <Link className={classes.linkSpecial} to={ROUTE.MOVIES}>
          <TitleText type="medium" text={currentText} />
          <Arrow size="medium" direction="right" />
        </Link>
      </div>
      <Carousel children={children} emptyItem={true} />
    </div>
  );
};

export default Gallery;
