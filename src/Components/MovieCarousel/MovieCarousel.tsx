import { Trailer } from '..';
import Slider from 'react-slick';
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

  const CustomPrevArrow = ({ onClick }: { onClick: () => void }) => {
    return (
      <div className={`${styles.customArrow} ${styles.prevArrow}`} onClick={onClick}>
        <span className={styles.arrow}>&#8249;</span>
      </div>
    );
  };

  const CustomNextArrow = ({ onClick }: { onClick: () => void }) => {
    return (
      <div className={`${styles.customArrow} ${styles.nextArrow}`} onClick={onClick}>
        <span className={styles.arrow}>&#8250;</span>
      </div>
    );
  };

  const settings = {
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow onClick={() => { }} />,
    nextArrow: <CustomNextArrow onClick={() => { }} />,
  };

  return (
      <Slider {...settings} >
        {trailers.map((trailer) => (
          <div key={trailer.videoId}>
            <Trailer videoId={trailer.videoId} />
          </div>
        ))}
      </Slider>
  );
};
