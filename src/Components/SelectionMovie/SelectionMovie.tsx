import styles from './styles.module.css';

interface IProps {
    image: string;
}

export const SelectionMovie = ({ image }: IProps) => {

    return (
        <div className={styles.selection}>
            <div className={styles.container}>
                <img
                    className={styles.picture}
                    src={`http://localhost:12120/api/films/images/${image}`}
                    alt=""
                />
                <div className={styles.title}>
                    Dramma
                </div>
            </div>
        </div>
    )
}

