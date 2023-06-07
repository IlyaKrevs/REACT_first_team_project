import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './styles.module.css';
import { useState } from 'react';
import { PersonItem } from '..';
import { useAppSelector } from '../../store';
import { getMovieMembers } from '../../store/selector';

export const PersonCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const members = useAppSelector(getMovieMembers);
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
    if (!members || !members.length || currentSlide === members.length - 1) {
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
      slidesToShow={Math.min(4, members?.length || 0)}
      slidesToScroll={1}
      autoplaySpeed={2000}
      initialSlide={0}
      pauseOnHover
      prevArrow={<CustomPrevArrow onClick={() => { }} />}
      nextArrow={<CustomNextArrow onClick={() => { }} />}
    >
      {members?.map((member) => (
        <PersonItem key={member.id} member={member} />
      ))}
    </Slider>
  );
};
