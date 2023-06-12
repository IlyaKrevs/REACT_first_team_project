import { Wrapper } from '../../Components/Wrapper/Wrapper';
import styles from './personPage.module.css';
import PersonHeader from '../../Components/PersonHeader/PersonHeader';
import { FullFilmography } from '../../Components';
import { useRef, useState } from 'react';
import { useAppSelector } from '../../store';
import { getMember } from '../../store/selector';
import { PersonCarousel } from '../../Components/PersonCarousel/PersonCarousel';

export const PersonPage = () => {
    const member = useAppSelector(getMember);
    const [showDetails, setShowDetails] = useState(false);
    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };
    const [value, setValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const biographyRef = useRef<HTMLHeadingElement>(null);

    const scrollToBiography = () => {
        if (biographyRef.current) {
            biographyRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <section className={styles.personPage}>
            <Wrapper>
                <div className={styles.container}>
                    {member && <PersonHeader
                        name={member.member.nameRU}
                        avatar={`http://localhost:12120/api/members/images/${member.member.imageName}`}
                        enName={member.profession.nameRU}
                        scrollToBiography={scrollToBiography}
                        closeModal={() => { }} />}
                </div>
                <div className={styles.wrapper}>
                    <FullFilmography />
                    <div className={styles.biography}>
                        <h2 ref={biographyRef} className={styles.title}>Биография</h2>
                        <p className={`${styles.text} ${showDetails ? styles.expanded : ''}`}>
                            {member?.member.text}
                        </p>
                        {!showDetails && (
                            <span className={styles.toggle} onClick={toggleDetails}>Читать дальше</span>
                        )}
                        {showDetails && (
                            <span className={styles.toggle} onClick={toggleDetails}>Свернуть</span>
                        )}
                    </div>
                    <h2 className={styles.title}>Комментарии</h2>
                    <form className={styles.form}>
                        <div className={styles.input}>
                            <input type='text' value={value} onChange={handleChange} placeholder='Расскажите первым о персоне'></input>
                        </div>
                        <button className={styles.btn}>Отправить</button>
                    </form>
                    <h2 className={styles.title}>Популярные персоны</h2>
                    <PersonCarousel />
                </div>
            </Wrapper>
        </section>
    )
}
