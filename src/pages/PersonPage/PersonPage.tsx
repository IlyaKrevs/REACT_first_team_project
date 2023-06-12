import { Wrapper } from '../../Components/Wrapper/Wrapper';
import styles from './personPage.module.css';
import PersonHeader from '../../Components/PersonHeader/PersonHeader';
import { FullFilmography } from '../../Components';
import { useRef, useState } from 'react';
import { useAppSelector } from '../../store';
import { getMember } from '../../store/selector';
import { PersonCarousel } from '../../Components/PersonCarousel/PersonCarousel';
import { useSelector } from 'react-redux';

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


    let isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian)


    let bioTextRU = 'Биография';
    let bioTextEN = 'Biography';

    let readMoreRU = 'Читать дальше';
    let readMoreEN = 'Read more';

    let collapseRU = 'Свернуть';
    let collapseEN = 'Collapse';

    let commentsRU = 'Комментарии';
    let commentsEN = 'Comments';

    let sendTextRU = 'Отправить';
    let sendTextEN = 'Send';

    let popularTextRU = 'Популярные персоны';
    let popularTextEN = 'Popular persons';

    let currentBioText;
    let currentReadMoreText;
    let currentCollapse;
    let currentCommentsText;
    let currentSendText;
    let currentPopularText;

    if (isRussian) {
        currentBioText = bioTextRU;
        currentReadMoreText = readMoreRU;
        currentCollapse = collapseRU;
        currentCommentsText = commentsRU;
        currentSendText = sendTextRU;
        currentPopularText = popularTextRU;
    } else {
        currentBioText = bioTextEN;
        currentReadMoreText = readMoreEN;
        currentCollapse = collapseEN;
        currentCommentsText = commentsEN;
        currentSendText = sendTextEN;
        currentPopularText = popularTextEN;

    }




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



                    <div className='container'>
                        <div className={styles.container}>
                            {member && <PersonHeader
                                name={isRussian ? member.member.nameRU : member.member.nameEN}
                                avatar={member.member.imageName}
                                enName={isRussian ? member.profession.nameRU : member.profession.nameEN}
                                scrollToBiography={scrollToBiography} />}
                        </div>
                    </div>



                    <FullFilmography />


                    <div className={styles.biography}>
                        <h2 ref={biographyRef} className={styles.title}>
                            {currentBioText}
                        </h2>

                        <p className={`${styles.text} ${showDetails ? styles.expanded : ''}`}>
                            {member?.member.text}
                        </p>


                        {!showDetails && (
                            <span className={styles.toggle} onClick={toggleDetails}>
                                {currentReadMoreText}
                            </span>
                        )}


                        {showDetails && (
                            <span className={styles.toggle}
                                onClick={toggleDetails}>
                                {currentCollapse}
                            </span>
                        )}


                    </div>

                    <h2 className={styles.title}>
                        {currentCommentsText}
                    </h2>

                    <form className={styles.form}>
                        <div className={styles.input}>
                            <input type='text'
                                className={styles.inputContainer}
                                value={value}
                                onChange={handleChange}
                                placeholder={isRussian ? 'Расскажите первым о персоне' : 'Be the first to tell about the person'} >

                            </input>
                        </div>


                        <button className={styles.btn}>
                            {currentSendText}
                        </button>

                    </form>

                    <h2 className={styles.title}>
                        {currentPopularText}
                    </h2>

                    <PersonCarousel />
                </div>
            </Wrapper >
        </section >
    )
}
