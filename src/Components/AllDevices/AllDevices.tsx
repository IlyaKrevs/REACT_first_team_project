import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { ipad, poster, tv } from '../../assets';
import { useSelector } from 'react-redux';

export const AllDevices = () => {

    let isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian);


    let text1RU = 'Cмотреть «[4K] Арктика. Рискованная экспедиция» на всех устройствах';
    let text1EN = 'Watch «[4K] Arctic. Risky Expedition" on all devices';

    let text2RU = 'Приложение доступно для скачивания на iOS, Android, SmartTV и приставках';
    let text2EN = 'The application is available for download on iOS, Android, SmartTV and set-top boxes';

    let text3RU = 'Подключить устройство';
    let text3EN = 'Connect device';

    let current1Text;
    let current2Text;
    let current3Text;

    if (isRussian) {
        current1Text = text1RU;
        current2Text = text2RU;
        current3Text = text3RU;
    } else {
        current1Text = text1EN;
        current2Text = text2EN;
        current3Text = text3EN;
    }


    return (
        <div className={styles.all_devices}>
            <div className={styles.wrapper}>

                <h2 className={styles.title}>
                    {current1Text}
                </h2>

                <p className={styles.subtitle}>
                    {current2Text}
                </p>

                <Link to={'https://www.ivi.tv/devices'}>
                    <div className={styles.text}>
                        {current3Text}
                    </div>
                </Link>

            </div>

            <div className={styles.devices}>

                <img className={styles.tv} src={tv} alt='tv' />
                <img className={styles.ipad} src={ipad} alt='ipad' />
                <img className={styles.poster_tv} src={poster} alt='poster' />
                <img className={styles.poster_ipad} src={poster} alt='poster' />
            </div>

        </div>
    )
}