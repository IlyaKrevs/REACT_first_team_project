import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__container'>
                <div className='footer__content'>
                    <div className='footer__column columnSize__small'>
                        <div className='dropDownList'>
                            <div className='dropDownList__title'>Жанры</div>
                            <div className='dropDownList__itemsContainer'>
                                <div className='dropDownList__item'>Артхаус</div>
                                <div className='dropDownList__item'>Артхаус</div>
                                <div className='dropDownList__item'>Артхаус</div>
                                <div className='dropDownList__item'>Артхаус</div>
                                <div className='dropDownList__item'>Артхаус</div>
                                <div className='dropDownList__item'>Артхаус</div>
                                <div className='dropDownList__item'>Артхаус</div>
                                <div className='dropDownList__item'>Артхаус</div>
                            </div>

                        </div>
                    </div>

                    <div className='footer__column columnSize__small'>
                        <div className='dropDownList'>
                            <div className='dropDownList__title'>Жанры</div>
                            <div className='dropDownList__itemsContainer'>
                                <div className='dropDownList__item'>Артхаус</div>
                                <div className='dropDownList__item'>Артхаус</div>
                                <div className='dropDownList__item'>Артхаус</div>
                                <div className='dropDownList__item'>Артхаус</div>
                                <div className='dropDownList__item'>Артхаус</div>
                                <div className='dropDownList__item'>Артхаус</div>
                                <div className='dropDownList__item'>Артхаус</div>
                            </div>

                            <div className='footer__colorLink'>
                                Активация сертификата
                            </div>
                        </div>
                    </div>


                    <div className='footer__column columnSize__small'>
                        <div className='dropDownList'>
                            <div className='dropDownList__title'>Жанры</div>
                            <div className='footer__supportDescription'>
                                <p>Мы всегда готовы вам помочь.</p>
                                <p>Наши операторы онлайн 24/7</p>
                            </div>

                            <div className='footer__supportsBtnContainer'>
                                <div className='subscribeItemButton'>
                                    <p>Написать в чате</p>
                                </div>
                                <div className='footer__supports__littleBtnContainer'>
                                    <div className='supports_littleBtn'>
                                        <div className='littleBtn__img'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                                        </div>
                                    </div>


                                    <div className='supports_littleBtn'>
                                        <div className='littleBtn__img'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='footer__askContainer'>
                                <div className='footer__askLink'>Вопросы</div>
                                <div className='footer__askDescription'>Ответы на вопросы</div>
                            </div>

                        </div>
                    </div>


                    <div className='footer__column columnSize__small'>
                        <div className='footer__widget'>
                            <div className='footer__widget__borders'>
                                <div className='footer__widget__imgContainer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75H192 160 64c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V352l8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V300.4c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4V32zm-64 76.7V240 371.3C357.2 317.8 280.5 288 200.7 288H192V192h8.7c79.8 0 156.5-29.8 215.3-83.3z" /></svg>
                                </div>
                            </div>

                            <div className='footer__widget__text'>
                                Смотрите фильмы, сериалы и мультфильмы без рекламы
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;