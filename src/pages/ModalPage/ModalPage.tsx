import { Link, generatePath } from 'react-router-dom';
import { Portal, TabsModal } from '../../Components';
import { Wrapper } from '../../Components/Wrapper/Wrapper';
import { ROUTE } from '../../router';
import { IMovie } from '../../store/types';
import styles from './styles.module.css';
import { TargetPortal } from '../../config';

interface IProps {
    closeModal: () => void;
    movie: IMovie;
}

export const ModalPage = ({ closeModal, movie }: IProps) => {
    const back = () => {
        closeModal();
    };

    return (
        <Portal target={TargetPortal.MODAL}>
            <div className={styles.modal}>
                <Wrapper>
                    <Link to="#" className={styles.close} onClick={closeModal}>
                        <div className={styles.back}>
                            &#8249; К фильму
                        </div>
                    </Link>
                    <div className={styles.content}>
                        <div className={styles.left}>
                            <h1 className={styles.title}>
                                {movie.nameRU}
                            </h1>
                            <TabsModal />
                        </div>
                        <div className={styles.right}>
                            <div className={styles.movie}>
                                <Link to={generatePath(`${ROUTE.HOME + ROUTE.WATCH}`, { id: movie.id })}>
                                    <img className={styles.photo} src={`http://localhost:12120/api/films/images/${movie.imageName}`} />
                                    <div className={styles.name}>{movie.nameRU}</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>
        </Portal>
    );
}
