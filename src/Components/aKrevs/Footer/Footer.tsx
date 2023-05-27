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
import { useSelector } from 'react-redux';

const Footer = () => {

    let aboutRU = ['О компании', 'Вакансии', 'Программа бета-тестирования', 'Информация для партнёров', 'Размещение рекламы', 'Пользовательское соглашение', 'Политика конфиденциальности', 'Комплаенс',];
    let aboutENG = ['About company', 'Vacancy', 'Beta-testing programm', 'Info for partners', 'Advertising placement', 'User agreement', 'Privacy Policy', 'Complaints',];
    let aboutTitleRU = 'О нас';
    let aboutTitleENG = 'About us';


    let divisionsRU = ['Мой Иви', 'Что нового', 'Фильмы', 'Сериалы', 'Мультфильмы', 'TV+', 'Что посмотреть',];
    let divisionsENG = ['My ivi', 'What news?', 'Films', 'Series', 'Cartoons', 'TV+', 'What to see?',];
    let divisionTitleRU = 'Разделы';
    let divisionTitleENG = 'Divisions';


    let supportRU = ['Мы всегда готовы вам помочь.', 'Наши операторы онлайн 24/7',];
    let supportENG = ['We are always ready to help you.', 'Our operators are online 24/7',];
    let supportTitleRU = 'Служба поддержки';
    let supportTitleENG = 'Supports';


    let askRU = ['ask.ivi.ru', 'Ответы на вопросы',];
    let askENG = ['ask.ivi.ru', 'Answers on questions',];

    let specialLinkRU = 'Активация сертификата';
    let specialLinkENG = 'Certificate activation';



    let currentAbout;
    let currentAboutTitle;

    let currentDivision;
    let currentDivisionTitle;

    let currentSupport;
    let currentSupportTitle;

    let currentAsk;

    let currentSpecialLink;


    let isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian);

    if (isRussian) {
        currentAbout = aboutRU;
        currentAboutTitle = aboutTitleRU;

        currentDivision = divisionsRU;
        currentDivisionTitle = divisionTitleRU;

        currentSupport = supportRU;
        currentSupportTitle = supportTitleRU;

        currentAsk = askRU;

        currentSpecialLink = specialLinkRU;
    } else {
        currentAbout = aboutENG;
        currentAboutTitle = aboutTitleENG;

        currentDivision = divisionsENG;
        currentDivisionTitle = divisionTitleENG;

        currentSupport = supportENG;
        currentSupportTitle = supportTitleENG;

        currentAsk = askENG;

        currentSpecialLink = specialLinkENG;
    }

    return (
        <div className={classes.footer}>
            <div className={classes.container}>


                <FooterContentItem>

                    <FooterColumnItem columnSize='small'>

                        <HeaderList title={{
                            titleText: currentAboutTitle,
                            titleType: 'small',
                        }} items={currentAbout} />

                    </FooterColumnItem>


                    <FooterColumnItem columnSize='small'>

                        <HeaderList title={{
                            titleText: currentDivisionTitle,
                            titleType: 'small',
                        }} items={currentDivision} />


                        <SpecialColorLink text={currentSpecialLink} />

                    </FooterColumnItem>


                    <FooterColumnItem columnSize='small' specialGap={true}>

                        <HeaderList title={{
                            titleText: currentSupportTitle,
                            titleType: 'small',
                        }} items={currentSupport} />


                        <FooterSupBtnsContainer />

                        <HeaderList items={currentAsk} />

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