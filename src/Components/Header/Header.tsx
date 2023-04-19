import React from 'react';
import iviLogo from '../../img/ivi_logo.svg';

const Header = () => {
    return (
        <div className='header' >
            <div className='headerTop'>
                <div className='headerTop__left'>
                    <div className='logo__container'>
                        <img src={iviLogo} alt="iviLogo" />
                    </div>
                    <div className='nav__container'>
                        <div className='nav__item'>Мой Иви</div>
                        <div className='nav__item'>Что нового</div>
                        <div className='nav__item'>Фильмы</div>
                        <div className='nav__item'>Сериалы</div>
                        <div className='nav__item'>Мультфильмы</div>
                        <div className='nav__item'>TV+</div>
                    </div>
                </div>
                <div className='headerTop__right'>
                    <div className='user__container'>
                        <div className='subscribeButton'>
                            <p>Оплатить подписку</p>
                        </div>
                        <div className='user__item'>
                            <div className='user__item__img'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg></div>
                            <p>Поиск</p>
                        </div>

                        <div className='user__item'>
                            <div className='user__item__img'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" /></svg>
                                <p></p>
                            </div>
                        </div>

                        <div className='user__avatar'>
                            <div className='user__avatar__img'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" /></svg>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='headerDropDown'>
                <div className='headerDropDown__body'>
                    <div className='headerDropDown__double'>
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
                                <div className='dropDownList__item'>Артхаус</div>
                                <div className='dropDownList__item'>Артхаус</div>
                                <div className='dropDownList__item'>Артхаус</div>
                                <div className='dropDownList__item'>Артхаус</div>
                                <div className='dropDownList__item'>Артхаус</div>
                                <div className='dropDownList__item'>Артхаус</div>
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

                    <div className='headerDropDOwn__single'>
                        <div className='dropDownList'>
                            <div className='dropDownList__title'>Жанры</div>
                            <div className='dropDownList__itemsContainer'>
                                <div className='dropDownList__item'>Артхаус</div>
                                <div className='dropDownList__item'>Артхаус</div>
                                <div className='dropDownList__item'>Артхаус</div>
                            </div>

                        </div>


                        <div className='dropDownList'>
                            <div className='dropDownList__title'>Жанры</div>
                            <div className='dropDownList__itemsContainer'>
                                <div className='dropDownList__item'>Артхаус</div>
                                <div className='dropDownList__item'>Артхаус</div>
                                <div className='dropDownList__item'>Артхаус</div>
                            </div>

                        </div>
                    </div>


                    <div className='headerDropDown__rightSide'>
                        <div className='compilation__container'>

                            <div className='mainAxisSplitter'>
                                <div className='mobileSplitter'></div>
                            </div>

                            <div className='rightSide__itemsContainer'>
                                <div className='compilation__item'>Новинки</div>
                                <div className='compilation__item'>Новинки</div>
                                <div className='compilation__item'>Новинки</div>
                                <div className='compilation__item'>Новинки</div>
                                <div className='compilation__item'>Новинки</div>
                                <div className='compilation__item'>Новинки</div>
                                <div className='compilation__item'>Новинки</div>
                                <div className='compilation__item'>Новинки</div>
                                <div className='compilation__item'>Новинки</div>
                                <div className='compilation__item'>Новинки</div>
                                <div className='compilation__item'>Новинки</div>
                                <div className='compilation__item'>Новинки</div>
                            </div>
                        </div>

                        <div className='subscribeItemContainer'>
                            <div className='subscribeItemAnimation'>
                            </div>

                            <div className='subscribeItemButton'>
                                <div className='subscribeItemButton__img'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M64 64V352H576V64H64zM0 64C0 28.7 28.7 0 64 0H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM128 448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32z" /></svg>
                                </div>
                                <p>Смотреть на SmartTV</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;