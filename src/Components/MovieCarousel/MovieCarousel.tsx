import { Trailer } from '..';
import Slider, { CustomArrowProps } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './styles.module.css';

export const MovieCarousel = () => {
    const trailers = [
        {
          videoId: '1',
          title: 'Trailer 1',
        },
        {
          videoId: '2',
          title: 'Trailer 2',
        },
        {
          videoId: '3',
          title: 'Trailer 3',
        },
      ];

  const CustomArrow = ({ onClick, className }: CustomArrowProps) => (
    <div className={`${className} ${styles.customArrow}`} onClick={onClick} />
  );

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <div className={`${styles.customArrow} ${styles.nextArrow}`} />,
    prevArrow: <div className={`${styles.customArrow} ${styles.prevArrow}`} />,
  };

  return (
    <Slider {...settings} className={styles.wrapper}>
      {trailers.map((trailers) => (
        <div key={trailers.videoId}>
          <Trailer videoId={trailers.videoId} />
        </div>
      ))}
    </Slider>
  );
};
