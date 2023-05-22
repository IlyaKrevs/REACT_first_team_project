import { Link } from 'react-router-dom';
import { DescrMovie, Person, Trailer, VideoPlayer } from '../../Components';
import { ROUTE } from '../../router';
import { Wrapper } from '../../Components/Wrapper/Wrapper';
import Carousel from '../../Components/aKrevs/Carousel/Carousel';
import styles from './styles.module.css';
import { useState } from 'react';


export const WatchPage = () => {
  const videoUrl = 'https://www.youtube.com/watch?v=di-VTrW7Kr0';
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={styles.descr}>
      <Wrapper>
        <div className={styles.wrapper}>
          <VideoPlayer videoUrl={videoUrl} />
          <DescrMovie />
        </div>
        <div className={styles.carousel}>
          <h2 className={styles.titleMov}>С фильмом «Идеальная жена» смотрят</h2>
          <Carousel />
        </div>
        <div className={styles.person}>
          <h2 className={styles.title}>
            <Link to={ROUTE.PERSON} className={styles.linkTitle}>
              Актёры и создатели
            </Link>
          </h2>
          <Link to={ROUTE.PERSON}>
            <Person />
          </Link>
        </div>
        <div className={styles.person}>
          <h2 className={styles.title}>
            <Link to={ROUTE.PERSON} className={styles.linkTitle}>
              <span className={styles.linkTitle}>Трейлеры</span>
            </Link> и доп. материалы
          </h2>
          <Trailer videoId={''} />
        </div>
        <div className={styles.person}>
          <h2 className={styles.title}>Фильм в подборках</h2>
          <Trailer videoId={''} />
        </div>
        <div className={styles.person}>
          <div className={styles.wrap}>
            <h2 className={styles.title}>Сюжет</h2>
            <i className={styles.icon} />
            <div className={styles.text}>Осторожно, спойлеры</div>
          </div>
          <div className={styles.clause}>
            <div className={styles.description}>
              <p>Биографическая спортивная драма, рассказывающая о пути становления Валерия Харламова, как хоккеиста с мировым именем, и человека, который вошел в большой спорт под легендарным номером 17. Сюжет открывается с момента знакомства Харламова с его неизменным тренером Анатолием Тарасовым, который, разглядев в Валерии потенциал, отправил его в Челябинскую область, играть за местную команду «Звезда». Будучи в составе «Звезды», Харламов уже подавал большие надежды, и по завершении сезона он отправился обратно в Москву, где ему поступило предложение от Тарасова войти в основной состав ЦСКА. Однако, перед этим Харламову предстоит пройти что-то вроде испытательного срока, во время которого тренер будет испытывать его на прочность, чтобы убедиться в его готовности полностью посвятить себя хоккею.</p>
              {!showDetails && (
                <div className={styles.toggle} onClick={toggleDetails}>
                  Читать дальше
                </div>
              )}
              {showDetails && (
                <>
                  <p>Впоследствии, Харламов проходит путь от ведущего нападающего ЦСКА, до лучшего игрока сборной СССР. В этот же период, Харламовым активно интересуется Эдуард Балашов, который курирует хоккей со стороны ЦК, и имеет к Тарасову личные счеты. Балашов во что бы то ни стало, решил обернуть Харламова против его тренера, но Валерий не поддается ни на какие провокации, что в очередной раз дает шанс Тарасову убедиться в том, что он не ошибся в своем воспитаннике.</p>
                  <p>В ходе нашумевшего матча между сборной СССР и командой «Спартак», Тарасов, пойдя на принцип, уводит свою команду со льда, после чего его лишают звания тренера сборной. Харламов же, в результате автомобильной аварии, с тяжелой травмой попадает в больницу. Одновременно с этим, он понимает, что в его жизни нет ничего важнее хоккея, и это так же влияет на его отношения с его девушкой Ириной. Едва встав на ноги, Валерий начинает усиленно тренироваться - совсем скоро должна состояться, ставшая впоследствии знаменитейшей, игра с канадской сборной.</p>
                  <p>Сборная СССР прибывает в Монреаль, где канадцы оказывают им более чем неприятный прием. Однако, не смотря на все это, игра закончилась победой нашей команды, и прочно вошла в анналы мирового хоккея.</p>
                </>
              )}
            </div>
            {showDetails && (
              <div className={styles.toggle} onClick={toggleDetails}>Свернуть</div>
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  )
}