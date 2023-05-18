import React from 'react';
import classes from './Footer.module.css';
import FooterContentItem from './FooterContentItem/FooterContentItem';
import HeaderList from '../Header/HeaderDropDown/HeaderList/HeaderList';
import FooterColumnItem from './FooterColumnItem/FooterColumnItem';
import SpecialColorLink from '../Text/Special/SpecialColorLink/SpecialColorLink';
import FooterSupBtnsContainer from './FooterSupBtnsContainer/FooterSupBtnsContainer';
import FooterWidget from './FooterWidget/FooterWidget';
import FooterDownloadContainer from './FooterDownloadContainer/FooterDownloadContainer';
import ParagraphText from '../Text/ParagraphText/ParagraphText';
import FooterSocialContainer from './FooterSocialContainer/FooterSocialContainer';

const Footer = () => {

    let footerAboutRU = ['О компании', 'Вакансии', 'Программа бета-тестирования', 'Информация для партнёров', 'Размещение рекламы', 'Пользовательское соглашение', 'Политика конфиденциальности', 'Комплаенс',];
    let footerAboutENG = ['About company', 'Vacancy', 'Beta-testing programm', 'Info for partners', 'Advertising placement', 'User agreement', 'Privacy Policy', 'Complaints',];



    let footerDivisionsRU = ['Мой Иви', 'Что нового', 'Фильмы', 'Сериалы', 'Мультфильмы', 'TV+', 'Что посмотреть',];
    let footerDivisionsENG = ['My ivi', 'What news?', 'Films', 'Series', 'Cartoons', 'TV+', 'What to see?',];



    let footerSupportRU = ['Мы всегда готовы вам помочь.', 'Наши операторы онлайн 24/7',];
    let footerSupportENG = ['We are always ready to help you.', 'Our operators are online 24/7',];



    let footerAskRU = ['ask.ivi.ru', 'Ответы на вопросы',];
    let footerAskENG = ['ask.ivi.ru', 'Answers on questions',];

    return (
        <div className={classes.footer}>
            <div className={classes.container}>


                <FooterContentItem>

                    <FooterColumnItem columnSize='small'>

                        <HeaderList title={{
                            titleText: 'О нас',
                            titleType: 'small',
                        }} items={footerAboutRU} />

                    </FooterColumnItem>


                    <FooterColumnItem columnSize='small'>

                        <HeaderList title={{
                            titleText: 'Разделы',
                            titleType: 'small',
                        }} items={footerDivisionsRU} />


                        <SpecialColorLink text='Активация сертификата' />

                    </FooterColumnItem>


                    <FooterColumnItem columnSize='small' specialGap={true}>

                        <HeaderList title={{
                            titleText: 'Служба поддержки',
                            titleType: 'small',
                        }} items={footerSupportRU} />


                        <FooterSupBtnsContainer />

                        <HeaderList items={footerAskRU} />

                    </FooterColumnItem>


                    <FooterColumnItem columnSize='small'>

                        <FooterWidget />

                    </FooterColumnItem>

                </FooterContentItem>






                <FooterContentItem>
                    <FooterColumnItem columnSize='half'>

                        <FooterDownloadContainer />

                        <div className='copyRightsContainer'>
                            <ParagraphText type='classic' text='© 2023 ООО «Иви.ру»' />
                            <ParagraphText type='classic' text=' HBO ® and related service marks are the property of Home Box Office, Inc' />

                        </div>

                    </FooterColumnItem>


                    <FooterColumnItem columnSize='half'>

                        <FooterSocialContainer />

                    </FooterColumnItem>
                </FooterContentItem>

            </div>
        </div>
    );
};

export default Footer;