import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './styles.module.css';
import { useState } from 'react';
import { SelectionMovie } from '..';

export const MovieCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  
  const movies = [
    {
      movie: '1',
      title: 'Trailer 1 ochen dlinnoe opisanie',
    },
    {
      movie: '2',
      title: 'Trailer 2',
    },
    {
      movie: '3',
      title: 'Trailer 3',
    },
    {
      movie: '4',
      title: 'Trailer 4',
    },
    {
      movie: '5',
      title: 'Trailer 5',
    },
  ];

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
    if (currentSlide === movies.length - 1) { 
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
      slidesToShow={Math.min(4, movies.length)}
      slidesToScroll={1}
      autoplaySpeed={2000}
      initialSlide={0}
      pauseOnHover
      prevArrow={<CustomPrevArrow onClick={() => { }} />}
      nextArrow={<CustomNextArrow onClick={() => { }} />}
    >
      {movies.map(() => (
        <SelectionMovie/>
      ))}
    </Slider>
  );
};
