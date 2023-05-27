import { Trailer } from '..';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './styles.module.css';
import { useState } from 'react';

export const MovieCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  const trailers = [
    {
      videoId: '1',
      title: 'Trailer 1 ochen dlinnoe opisanie',
    },
    {
      videoId: '2',
      title: 'Trailer 2',
    },
    {
      videoId: '3',
      title: 'Trailer 3',
    },
    {
      videoId: '4',
      title: 'Trailer 4',
    },
    {
      videoId: '5',
      title: 'Trailer 5',
    },
  ];

  const CustomPrevArrow = ({ onClick }: { onClick: () => void }) => {
    if (currentSlide === 0) { // Проверяем, если текущий слайд равен 0, значит, мы находимся на первом слайде, и стрелка должна быть скрыта
      return null; // Возвращаем null, чтобы стрелка не отображалась
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
        <span className={styles.arrow}>&#8249;</span> {/* Здесь используется левая стрелка "&#8249;" */}
      </div>
    );
  };


  const CustomNextArrow = ({ onClick }: { onClick: () => void }) => {
    if (currentSlide === trailers.length - 1) { // Проверяем, если текущий слайд равен последнему, значит, мы находимся на последнем слайде, и стрелка должна быть скрыта
      return null; // Возвращаем null, чтобы стрелка не отображалась
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
        <span className={styles.arrow}>&#8250;</span> {/* Здесь используется правая стрелка "&#8250;" */}
      </div>
    );
  };


  return (
    <Slider
      arrows
      infinite
      slidesToShow={Math.min(4, trailers.length)}
      slidesToScroll={1}
      autoplaySpeed={2000}
      initialSlide={0}
      pauseOnHover
      prevArrow={<CustomPrevArrow onClick={() => { }} />}
      nextArrow={<CustomNextArrow onClick={() => { }} />}
    >
      {trailers.map((trailer) => (
        <Trailer key={trailer.videoId} videoId={trailer.videoId} />
      ))}
    </Slider>
  );
};
