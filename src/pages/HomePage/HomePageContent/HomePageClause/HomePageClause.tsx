import React from 'react';
import Clause from '../../../../Components/aKrevs/Clause/Clause';
import ClauseUL from '../../../../Components/aKrevs/Clause/ClauseUL/ClauseUL';
import { useSelector } from 'react-redux';

const HomePageClause = () => {

    let isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian)


    let titleRU = 'Онлайн-кинотеатр Иви: фильмы в хорошем качестве всегда приносят настоящее удовольствие';
    let titleENG = 'Ivi Online Cinema: Movies in good quality are always a real pleasure';
    let currentTitle = isRussian ? titleRU : titleENG;



    let descriptionRU = ['Каждый день миллионы людей ищут фильмы онлайн, и никто не хочет усложнять себе жизнь – и вы наверняка один из них! А раз так, то Иви – это именно тот ресурс, который вам нужен. От лучших кинолент в HD-качестве вас отделяет буквально один клик. Мы не просто освобождаем от необходимости идти в кинотеатр или изучать программу телепередач – у посетителей нашего ресурса гораздо больше возможностей.', 'Видеотека Иви – это постоянно пополняющаяся коллекция в рунете, которая насчитывает более 60 тысяч отечественного и зарубежного контента, доступного для просмотра онлайн. Мы первыми в России подписали контракты с крупнейшими голливудскими студиями (Walt Disney, Sony, 20th Century Fox, Universal, Paramount, MGM и другими) и на постоянной основе сотрудничаем с крупнейшими российскими компаниями и телеканалами.', 'Онлайн-кинотеатр ivi.ru – это:'];
    let descriptionENG = ['Every day, millions of people search for movies online, and no one wants to make things difficult for themselves - and you must be one of them! And if so, then Evie is exactly the resource that you need. You are literally one click away from the best films in HD quality. We do not just free you from the need to go to the cinema or study the TV program - visitors to our resource have much more opportunities.', "Ivy's video library is a constantly growing collection in RuNet, which has more than 60 thousand domestic and foreign content available for viewing online. We were the first in Russia to sign contracts with the largest Hollywood studios (Walt Disney, Sony, 20th Century Fox, Universal, Paramount, MGM and others) and we cooperate with the largest Russian companies and TV channels on an ongoing basis.", 'Online cinema ivi.ru is:'];
    let currentDescription = isRussian ? descriptionRU : descriptionENG;



    let listRU = ['уникальная рекомендательная система, учитывающая ваши предпочтения и предлагающая посмотреть именно то, что точно придется вам по душе;', 'просмотр в одно касание на любом из устройств, подключенном к вашему Иви-аккаунту – от смартфонов до телевизоров с технологией Smart TV;', 'возможность скачивать в память мобильного устройства лицензионный контент и смотреть его без доступа к Интернету;', 'уникальные условия и преимущества для обладателей подписки Иви, делающей кинопросмотр комфортным и приятным;', 'удобная и продвинутая система уведомлений, вы не пропустите выход крутого обсуждаемого блокбастера – мы известим о появлении подходящим для вас способом;', 'возможность добавлять фильмы в «смотреть позже», чтобы вернуться к ним в свободное время;', 'контент, для просмотра которого не требуется устанавливать видеоплееры или искать кодеки;', 'просмотр онлайн контента хорошего разрешения без регистрации и смс.',];
    let listENG = ['a unique recommendation system that takes into account your preferences and offers to watch exactly what you will definitely like;', 'one-touch viewing on any of the devices connected to your Ivy account - from smartphones to TVs with Smart TV technology;', 'the ability to download licensed content to the memory of a mobile device and watch it without access to the Internet;', 'unique conditions and benefits for owners of the Evie subscription, which makes movie viewing comfortable and enjoyable;', 'convenient and advanced notification system, you will not miss the release of a cool discussed blockbuster - we will notify you of the appearance in a way suitable for you;', 'the ability to add movies to "watch later" to return to them in your free time;', 'контент, для просмотра которого не требуется устанавливать видеоплееры или искать кодеки;', 'viewing online content of good resolution without registration and SMS.',];
    let currentList = isRussian ? listRU : listENG;
    let showList = <ClauseUL liArr={currentList} />



    let conclusionRU = ['Откройте для себя возможность смотреть фильмы онлайн бесплатно в отличном качестве с кинотеатром Иви!'];
    let conclusionENG = ['Discover the opportunity to watch movies online for free in excellent quality with the Ivy cinema!'];
    let currentConclusion = isRussian ? conclusionRU : conclusionENG;



    let showArr = [...currentDescription, showList, ...currentConclusion];

    return (
        <Clause
            title={{
                text: currentTitle,
                type: 'medium'
            }}
            description={{
                text: [...showArr],
                type: 'classic'
            }}
            showStyle='homePage'
        />
    );
};

export default HomePageClause;