import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './styles.module.css';
import { useState } from 'react';
import { MovieItem } from '..';
import { useAppSelector } from '../../store';
import { getMovies } from '../../store/selector';

export const MoviesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const movies = useAppSelector(getMovies);
  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  const CustomPrevArrow = ({ onClick }: { onClick: () => void }) => {
    if (currentSlide === 0) {
      return null;
    }
    return (
      <div
        className={`${styles.customArrow} ${styles.prevArrow}`}
        onClick={() => {
          const prevSlide = currentSlide - 1;
          setCurrentSlide(prevSlide);
          handleSlideChange(prevSlide);
          onClick();
        }}
      >
        <span className={styles.arrow}>&#8249;</span>
      </div>
    );
  };

  const CustomNextArrow = ({ onClick }: { onClick: () => void }) => {
    if (!movies || !movies.length || currentSlide === movies.length - 1) {
      return null;
    }
    return (
      <div
        className={`${styles.customArrow} ${styles.nextArrow}`}
        onClick={() => {
          const nextSlide = currentSlide + 1;
          setCurrentSlide(nextSlide);
          handleSlideChange(nextSlide);
          onClick();
        }}
      >
        <span className={styles.arrow}>&#8250;</span>
      </div>
    );
  };

  return (
    <Slider
      arrows
      infinite
      slidesToShow={Math.min(7, movies?.length || 0)}
      slidesToScroll={1}
      autoplaySpeed={2000}
      initialSlide={0}
      pauseOnHover
      prevArrow={<CustomPrevArrow onClick={() => { }} />}
      nextArrow={<CustomNextArrow onClick={() => { }} />}
    >
      {movies?.map((movie) => (
        <MovieItem key={movie.id} movie={movie}  />
      ))}
    </Slider>
  );
};
