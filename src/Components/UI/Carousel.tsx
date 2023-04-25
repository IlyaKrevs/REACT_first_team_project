import React from 'react';
import orangeCow from '../../img/orange_cow.jpg';


const Carousel = () => {
    return (
        <div className='carousel__viewPort'>
            <div className='carousel__arrowContainer leftArrow'>

            </div>


            <div className='carousel__container'>
                <div className='carousel__item'>
                    <div className='carousel__item__imgSection'>
                        <div className='carousel__item__imageWrapper'>
                            <img className='carousel__item__imageProps' src={orangeCow} alt="" />
                        </div>

                        <div className='carousel__item__hoverContainer'>
                            <div className='carousel__item__hoverBtnContainer'>
                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" /></svg>
                                </div>

                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M14.1 463.3c-18.7-18.7-18.7-49.1 0-67.9L395.4 14.1c18.7-18.7 49.1-18.7 67.9 0l34.6 34.6c18.7 18.7 18.7 49.1 0 67.9L116.5 497.9c-18.7 18.7-49.1 18.7-67.9 0L14.1 463.3zM347.6 187.6l105-105L429.4 59.3l-105 105 23.3 23.3z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" /></svg>
                                </div>


                            </div>


                            <div className='carousel__item__hoverPropsContainer'>
                                <div className='carousel__item__hover__propsItem'>
                                    <div className='firstPropsContainer'>
                                        <div className='firstPropsContainer__ratingText'>8,1
                                        </div>
                                        <div className='firstPropsContainer__ratingContainer'>
                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>
                                        </div>


                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='secondPropsContainer'>
                                        <div className='secondPropsContainer__text'>
                                            сюжет
                                        </div>

                                        <div className='ratingLineMAIN bigLine'>
                                            <div className='ratingLinePROGRESS bigLine'></div>
                                        </div>
                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='thirdPropsContainer'>
                                        <div className='third_textLine'>2012-2017, США, Приключения
                                        </div>
                                        <div className='third_textLine'>
                                            5 сезонов
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='carousel__item__ageBage'>
                            <div className='carousel__item__ageBage__text'>16+</div>
                        </div>


                    </div>


                    <div className='carousel__item__textSection'>
                        <div className='carousel__item__title'>Оранжевая корова</div>
                        <div className='carousel__item__extra'>Бесплатно</div>
                    </div>
                </div>


                <div className='carousel__itemEMPTY'>
                    <div className='carousel__itemEMPTY__text'>
                        Посмотреть все
                    </div>
                </div>

                <div className='carousel__item'>
                    <div className='carousel__item__imgSection'>
                        <div className='carousel__item__imageWrapper'>
                            <img className='carousel__item__imageProps' src={orangeCow} alt="" />
                        </div>

                        <div className='carousel__item__hoverContainer'>
                            <div className='carousel__item__hoverBtnContainer'>
                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" /></svg>
                                </div>

                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M14.1 463.3c-18.7-18.7-18.7-49.1 0-67.9L395.4 14.1c18.7-18.7 49.1-18.7 67.9 0l34.6 34.6c18.7 18.7 18.7 49.1 0 67.9L116.5 497.9c-18.7 18.7-49.1 18.7-67.9 0L14.1 463.3zM347.6 187.6l105-105L429.4 59.3l-105 105 23.3 23.3z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" /></svg>
                                </div>


                            </div>


                            <div className='carousel__item__hoverPropsContainer'>
                                <div className='carousel__item__hover__propsItem'>
                                    <div className='firstPropsContainer'>
                                        <div className='firstPropsContainer__ratingText'>8,1
                                        </div>
                                        <div className='firstPropsContainer__ratingContainer'>
                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>
                                        </div>


                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='secondPropsContainer'>
                                        <div className='secondPropsContainer__text'>
                                            сюжет
                                        </div>

                                        <div className='ratingLineMAIN bigLine'>
                                            <div className='ratingLinePROGRESS bigLine'></div>
                                        </div>
                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='thirdPropsContainer'>
                                        <div className='third_textLine'>2012-2017, США, Приключения
                                        </div>
                                        <div className='third_textLine'>
                                            5 сезонов
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='carousel__item__ageBage'>
                            <div className='carousel__item__ageBage__text'>16+</div>
                        </div>


                    </div>


                    <div className='carousel__item__textSection'>
                        <div className='carousel__item__title'>Оранжевая корова</div>
                        <div className='carousel__item__extra'>Бесплатно</div>
                    </div>
                </div>

                <div className='carousel__item'>
                    <div className='carousel__item__imgSection'>
                        <div className='carousel__item__imageWrapper'>
                            <img className='carousel__item__imageProps' src={orangeCow} alt="" />
                        </div>

                        <div className='carousel__item__hoverContainer'>
                            <div className='carousel__item__hoverBtnContainer'>
                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" /></svg>
                                </div>

                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M14.1 463.3c-18.7-18.7-18.7-49.1 0-67.9L395.4 14.1c18.7-18.7 49.1-18.7 67.9 0l34.6 34.6c18.7 18.7 18.7 49.1 0 67.9L116.5 497.9c-18.7 18.7-49.1 18.7-67.9 0L14.1 463.3zM347.6 187.6l105-105L429.4 59.3l-105 105 23.3 23.3z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" /></svg>
                                </div>


                            </div>


                            <div className='carousel__item__hoverPropsContainer'>
                                <div className='carousel__item__hover__propsItem'>
                                    <div className='firstPropsContainer'>
                                        <div className='firstPropsContainer__ratingText'>8,1
                                        </div>
                                        <div className='firstPropsContainer__ratingContainer'>
                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>
                                        </div>


                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='secondPropsContainer'>
                                        <div className='secondPropsContainer__text'>
                                            сюжет
                                        </div>

                                        <div className='ratingLineMAIN bigLine'>
                                            <div className='ratingLinePROGRESS bigLine'></div>
                                        </div>
                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='thirdPropsContainer'>
                                        <div className='third_textLine'>2012-2017, США, Приключения
                                        </div>
                                        <div className='third_textLine'>
                                            5 сезонов
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='carousel__item__ageBage'>
                            <div className='carousel__item__ageBage__text'>16+</div>
                        </div>


                    </div>


                    <div className='carousel__item__textSection'>
                        <div className='carousel__item__title'>Оранжевая корова</div>
                        <div className='carousel__item__extra'>Бесплатно</div>
                    </div>
                </div>

                <div className='carousel__item'>
                    <div className='carousel__item__imgSection'>
                        <div className='carousel__item__imageWrapper'>
                            <img className='carousel__item__imageProps' src={orangeCow} alt="" />
                        </div>

                        <div className='carousel__item__hoverContainer'>
                            <div className='carousel__item__hoverBtnContainer'>
                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" /></svg>
                                </div>

                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M14.1 463.3c-18.7-18.7-18.7-49.1 0-67.9L395.4 14.1c18.7-18.7 49.1-18.7 67.9 0l34.6 34.6c18.7 18.7 18.7 49.1 0 67.9L116.5 497.9c-18.7 18.7-49.1 18.7-67.9 0L14.1 463.3zM347.6 187.6l105-105L429.4 59.3l-105 105 23.3 23.3z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" /></svg>
                                </div>


                            </div>


                            <div className='carousel__item__hoverPropsContainer'>
                                <div className='carousel__item__hover__propsItem'>
                                    <div className='firstPropsContainer'>
                                        <div className='firstPropsContainer__ratingText'>8,1
                                        </div>
                                        <div className='firstPropsContainer__ratingContainer'>
                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>
                                        </div>


                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='secondPropsContainer'>
                                        <div className='secondPropsContainer__text'>
                                            сюжет
                                        </div>

                                        <div className='ratingLineMAIN bigLine'>
                                            <div className='ratingLinePROGRESS bigLine'></div>
                                        </div>
                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='thirdPropsContainer'>
                                        <div className='third_textLine'>2012-2017, США, Приключения
                                        </div>
                                        <div className='third_textLine'>
                                            5 сезонов
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='carousel__item__ageBage'>
                            <div className='carousel__item__ageBage__text'>16+</div>
                        </div>


                    </div>


                    <div className='carousel__item__textSection'>
                        <div className='carousel__item__title'>Оранжевая корова</div>
                        <div className='carousel__item__extra'>Бесплатно</div>
                    </div>
                </div>

                <div className='carousel__item'>
                    <div className='carousel__item__imgSection'>
                        <div className='carousel__item__imageWrapper'>
                            <img className='carousel__item__imageProps' src={orangeCow} alt="" />
                        </div>

                        <div className='carousel__item__hoverContainer'>
                            <div className='carousel__item__hoverBtnContainer'>
                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" /></svg>
                                </div>

                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M14.1 463.3c-18.7-18.7-18.7-49.1 0-67.9L395.4 14.1c18.7-18.7 49.1-18.7 67.9 0l34.6 34.6c18.7 18.7 18.7 49.1 0 67.9L116.5 497.9c-18.7 18.7-49.1 18.7-67.9 0L14.1 463.3zM347.6 187.6l105-105L429.4 59.3l-105 105 23.3 23.3z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" /></svg>
                                </div>


                            </div>


                            <div className='carousel__item__hoverPropsContainer'>
                                <div className='carousel__item__hover__propsItem'>
                                    <div className='firstPropsContainer'>
                                        <div className='firstPropsContainer__ratingText'>8,1
                                        </div>
                                        <div className='firstPropsContainer__ratingContainer'>
                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>
                                        </div>


                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='secondPropsContainer'>
                                        <div className='secondPropsContainer__text'>
                                            сюжет
                                        </div>

                                        <div className='ratingLineMAIN bigLine'>
                                            <div className='ratingLinePROGRESS bigLine'></div>
                                        </div>
                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='thirdPropsContainer'>
                                        <div className='third_textLine'>2012-2017, США, Приключения
                                        </div>
                                        <div className='third_textLine'>
                                            5 сезонов
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='carousel__item__ageBage'>
                            <div className='carousel__item__ageBage__text'>16+</div>
                        </div>


                    </div>


                    <div className='carousel__item__textSection'>
                        <div className='carousel__item__title'>Оранжевая корова</div>
                        <div className='carousel__item__extra'>Бесплатно</div>
                    </div>
                </div>

                <div className='carousel__item'>
                    <div className='carousel__item__imgSection'>
                        <div className='carousel__item__imageWrapper'>
                            <img className='carousel__item__imageProps' src={orangeCow} alt="" />
                        </div>

                        <div className='carousel__item__hoverContainer'>
                            <div className='carousel__item__hoverBtnContainer'>
                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" /></svg>
                                </div>

                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M14.1 463.3c-18.7-18.7-18.7-49.1 0-67.9L395.4 14.1c18.7-18.7 49.1-18.7 67.9 0l34.6 34.6c18.7 18.7 18.7 49.1 0 67.9L116.5 497.9c-18.7 18.7-49.1 18.7-67.9 0L14.1 463.3zM347.6 187.6l105-105L429.4 59.3l-105 105 23.3 23.3z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" /></svg>
                                </div>


                            </div>


                            <div className='carousel__item__hoverPropsContainer'>
                                <div className='carousel__item__hover__propsItem'>
                                    <div className='firstPropsContainer'>
                                        <div className='firstPropsContainer__ratingText'>8,1
                                        </div>
                                        <div className='firstPropsContainer__ratingContainer'>
                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>
                                        </div>


                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='secondPropsContainer'>
                                        <div className='secondPropsContainer__text'>
                                            сюжет
                                        </div>

                                        <div className='ratingLineMAIN bigLine'>
                                            <div className='ratingLinePROGRESS bigLine'></div>
                                        </div>
                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='thirdPropsContainer'>
                                        <div className='third_textLine'>2012-2017, США, Приключения
                                        </div>
                                        <div className='third_textLine'>
                                            5 сезонов
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='carousel__item__ageBage'>
                            <div className='carousel__item__ageBage__text'>16+</div>
                        </div>


                    </div>


                    <div className='carousel__item__textSection'>
                        <div className='carousel__item__title'>Оранжевая корова</div>
                        <div className='carousel__item__extra'>Бесплатно</div>
                    </div>
                </div>

                <div className='carousel__item'>
                    <div className='carousel__item__imgSection'>
                        <div className='carousel__item__imageWrapper'>
                            <img className='carousel__item__imageProps' src={orangeCow} alt="" />
                        </div>

                        <div className='carousel__item__hoverContainer'>
                            <div className='carousel__item__hoverBtnContainer'>
                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" /></svg>
                                </div>

                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M14.1 463.3c-18.7-18.7-18.7-49.1 0-67.9L395.4 14.1c18.7-18.7 49.1-18.7 67.9 0l34.6 34.6c18.7 18.7 18.7 49.1 0 67.9L116.5 497.9c-18.7 18.7-49.1 18.7-67.9 0L14.1 463.3zM347.6 187.6l105-105L429.4 59.3l-105 105 23.3 23.3z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" /></svg>
                                </div>


                            </div>


                            <div className='carousel__item__hoverPropsContainer'>
                                <div className='carousel__item__hover__propsItem'>
                                    <div className='firstPropsContainer'>
                                        <div className='firstPropsContainer__ratingText'>8,1
                                        </div>
                                        <div className='firstPropsContainer__ratingContainer'>
                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>
                                        </div>


                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='secondPropsContainer'>
                                        <div className='secondPropsContainer__text'>
                                            сюжет
                                        </div>

                                        <div className='ratingLineMAIN bigLine'>
                                            <div className='ratingLinePROGRESS bigLine'></div>
                                        </div>
                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='thirdPropsContainer'>
                                        <div className='third_textLine'>2012-2017, США, Приключения
                                        </div>
                                        <div className='third_textLine'>
                                            5 сезонов
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='carousel__item__ageBage'>
                            <div className='carousel__item__ageBage__text'>16+</div>
                        </div>


                    </div>


                    <div className='carousel__item__textSection'>
                        <div className='carousel__item__title'>Оранжевая корова</div>
                        <div className='carousel__item__extra'>Бесплатно</div>
                    </div>
                </div>

                <div className='carousel__item'>
                    <div className='carousel__item__imgSection'>
                        <div className='carousel__item__imageWrapper'>
                            <img className='carousel__item__imageProps' src={orangeCow} alt="" />
                        </div>

                        <div className='carousel__item__hoverContainer'>
                            <div className='carousel__item__hoverBtnContainer'>
                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" /></svg>
                                </div>

                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M14.1 463.3c-18.7-18.7-18.7-49.1 0-67.9L395.4 14.1c18.7-18.7 49.1-18.7 67.9 0l34.6 34.6c18.7 18.7 18.7 49.1 0 67.9L116.5 497.9c-18.7 18.7-49.1 18.7-67.9 0L14.1 463.3zM347.6 187.6l105-105L429.4 59.3l-105 105 23.3 23.3z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" /></svg>
                                </div>


                            </div>


                            <div className='carousel__item__hoverPropsContainer'>
                                <div className='carousel__item__hover__propsItem'>
                                    <div className='firstPropsContainer'>
                                        <div className='firstPropsContainer__ratingText'>8,1
                                        </div>
                                        <div className='firstPropsContainer__ratingContainer'>
                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>
                                        </div>


                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='secondPropsContainer'>
                                        <div className='secondPropsContainer__text'>
                                            сюжет
                                        </div>

                                        <div className='ratingLineMAIN bigLine'>
                                            <div className='ratingLinePROGRESS bigLine'></div>
                                        </div>
                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='thirdPropsContainer'>
                                        <div className='third_textLine'>2012-2017, США, Приключения
                                        </div>
                                        <div className='third_textLine'>
                                            5 сезонов
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='carousel__item__ageBage'>
                            <div className='carousel__item__ageBage__text'>16+</div>
                        </div>


                    </div>


                    <div className='carousel__item__textSection'>
                        <div className='carousel__item__title'>Оранжевая корова</div>
                        <div className='carousel__item__extra'>Бесплатно</div>
                    </div>
                </div>

                <div className='carousel__item'>
                    <div className='carousel__item__imgSection'>
                        <div className='carousel__item__imageWrapper'>
                            <img className='carousel__item__imageProps' src={orangeCow} alt="" />
                        </div>

                        <div className='carousel__item__hoverContainer'>
                            <div className='carousel__item__hoverBtnContainer'>
                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" /></svg>
                                </div>

                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M14.1 463.3c-18.7-18.7-18.7-49.1 0-67.9L395.4 14.1c18.7-18.7 49.1-18.7 67.9 0l34.6 34.6c18.7 18.7 18.7 49.1 0 67.9L116.5 497.9c-18.7 18.7-49.1 18.7-67.9 0L14.1 463.3zM347.6 187.6l105-105L429.4 59.3l-105 105 23.3 23.3z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" /></svg>
                                </div>


                            </div>


                            <div className='carousel__item__hoverPropsContainer'>
                                <div className='carousel__item__hover__propsItem'>
                                    <div className='firstPropsContainer'>
                                        <div className='firstPropsContainer__ratingText'>8,1
                                        </div>
                                        <div className='firstPropsContainer__ratingContainer'>
                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>
                                        </div>


                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='secondPropsContainer'>
                                        <div className='secondPropsContainer__text'>
                                            сюжет
                                        </div>

                                        <div className='ratingLineMAIN bigLine'>
                                            <div className='ratingLinePROGRESS bigLine'></div>
                                        </div>
                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='thirdPropsContainer'>
                                        <div className='third_textLine'>2012-2017, США, Приключения
                                        </div>
                                        <div className='third_textLine'>
                                            5 сезонов
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='carousel__item__ageBage'>
                            <div className='carousel__item__ageBage__text'>16+</div>
                        </div>


                    </div>


                    <div className='carousel__item__textSection'>
                        <div className='carousel__item__title'>Оранжевая корова</div>
                        <div className='carousel__item__extra'>Бесплатно</div>
                    </div>
                </div>

                <div className='carousel__item'>
                    <div className='carousel__item__imgSection'>
                        <div className='carousel__item__imageWrapper'>
                            <img className='carousel__item__imageProps' src={orangeCow} alt="" />
                        </div>

                        <div className='carousel__item__hoverContainer'>
                            <div className='carousel__item__hoverBtnContainer'>
                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" /></svg>
                                </div>

                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M14.1 463.3c-18.7-18.7-18.7-49.1 0-67.9L395.4 14.1c18.7-18.7 49.1-18.7 67.9 0l34.6 34.6c18.7 18.7 18.7 49.1 0 67.9L116.5 497.9c-18.7 18.7-49.1 18.7-67.9 0L14.1 463.3zM347.6 187.6l105-105L429.4 59.3l-105 105 23.3 23.3z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" /></svg>
                                </div>


                            </div>


                            <div className='carousel__item__hoverPropsContainer'>
                                <div className='carousel__item__hover__propsItem'>
                                    <div className='firstPropsContainer'>
                                        <div className='firstPropsContainer__ratingText'>8,1
                                        </div>
                                        <div className='firstPropsContainer__ratingContainer'>
                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>
                                        </div>


                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='secondPropsContainer'>
                                        <div className='secondPropsContainer__text'>
                                            сюжет
                                        </div>

                                        <div className='ratingLineMAIN bigLine'>
                                            <div className='ratingLinePROGRESS bigLine'></div>
                                        </div>
                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='thirdPropsContainer'>
                                        <div className='third_textLine'>2012-2017, США, Приключения
                                        </div>
                                        <div className='third_textLine'>
                                            5 сезонов
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='carousel__item__ageBage'>
                            <div className='carousel__item__ageBage__text'>16+</div>
                        </div>


                    </div>


                    <div className='carousel__item__textSection'>
                        <div className='carousel__item__title'>Оранжевая корова</div>
                        <div className='carousel__item__extra'>Бесплатно</div>
                    </div>
                </div>

                <div className='carousel__item'>
                    <div className='carousel__item__imgSection'>
                        <div className='carousel__item__imageWrapper'>
                            <img className='carousel__item__imageProps' src={orangeCow} alt="" />
                        </div>

                        <div className='carousel__item__hoverContainer'>
                            <div className='carousel__item__hoverBtnContainer'>
                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" /></svg>
                                </div>

                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M14.1 463.3c-18.7-18.7-18.7-49.1 0-67.9L395.4 14.1c18.7-18.7 49.1-18.7 67.9 0l34.6 34.6c18.7 18.7 18.7 49.1 0 67.9L116.5 497.9c-18.7 18.7-49.1 18.7-67.9 0L14.1 463.3zM347.6 187.6l105-105L429.4 59.3l-105 105 23.3 23.3z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" /></svg>
                                </div>


                            </div>


                            <div className='carousel__item__hoverPropsContainer'>
                                <div className='carousel__item__hover__propsItem'>
                                    <div className='firstPropsContainer'>
                                        <div className='firstPropsContainer__ratingText'>8,1
                                        </div>
                                        <div className='firstPropsContainer__ratingContainer'>
                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>
                                        </div>


                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='secondPropsContainer'>
                                        <div className='secondPropsContainer__text'>
                                            сюжет
                                        </div>

                                        <div className='ratingLineMAIN bigLine'>
                                            <div className='ratingLinePROGRESS bigLine'></div>
                                        </div>
                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='thirdPropsContainer'>
                                        <div className='third_textLine'>2012-2017, США, Приключения
                                        </div>
                                        <div className='third_textLine'>
                                            5 сезонов
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='carousel__item__ageBage'>
                            <div className='carousel__item__ageBage__text'>16+</div>
                        </div>


                    </div>


                    <div className='carousel__item__textSection'>
                        <div className='carousel__item__title'>Оранжевая корова</div>
                        <div className='carousel__item__extra'>Бесплатно</div>
                    </div>
                </div>

                <div className='carousel__item'>
                    <div className='carousel__item__imgSection'>
                        <div className='carousel__item__imageWrapper'>
                            <img className='carousel__item__imageProps' src={orangeCow} alt="" />
                        </div>

                        <div className='carousel__item__hoverContainer'>
                            <div className='carousel__item__hoverBtnContainer'>
                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" /></svg>
                                </div>

                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M14.1 463.3c-18.7-18.7-18.7-49.1 0-67.9L395.4 14.1c18.7-18.7 49.1-18.7 67.9 0l34.6 34.6c18.7 18.7 18.7 49.1 0 67.9L116.5 497.9c-18.7 18.7-49.1 18.7-67.9 0L14.1 463.3zM347.6 187.6l105-105L429.4 59.3l-105 105 23.3 23.3z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" /></svg>
                                </div>


                            </div>


                            <div className='carousel__item__hoverPropsContainer'>
                                <div className='carousel__item__hover__propsItem'>
                                    <div className='firstPropsContainer'>
                                        <div className='firstPropsContainer__ratingText'>8,1
                                        </div>
                                        <div className='firstPropsContainer__ratingContainer'>
                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>
                                        </div>


                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='secondPropsContainer'>
                                        <div className='secondPropsContainer__text'>
                                            сюжет
                                        </div>

                                        <div className='ratingLineMAIN bigLine'>
                                            <div className='ratingLinePROGRESS bigLine'></div>
                                        </div>
                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='thirdPropsContainer'>
                                        <div className='third_textLine'>2012-2017, США, Приключения
                                        </div>
                                        <div className='third_textLine'>
                                            5 сезонов
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='carousel__item__ageBage'>
                            <div className='carousel__item__ageBage__text'>16+</div>
                        </div>


                    </div>


                    <div className='carousel__item__textSection'>
                        <div className='carousel__item__title'>Оранжевая корова</div>
                        <div className='carousel__item__extra'>Бесплатно</div>
                    </div>
                </div>

                <div className='carousel__item'>
                    <div className='carousel__item__imgSection'>
                        <div className='carousel__item__imageWrapper'>
                            <img className='carousel__item__imageProps' src={orangeCow} alt="" />
                        </div>

                        <div className='carousel__item__hoverContainer'>
                            <div className='carousel__item__hoverBtnContainer'>
                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" /></svg>
                                </div>

                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M14.1 463.3c-18.7-18.7-18.7-49.1 0-67.9L395.4 14.1c18.7-18.7 49.1-18.7 67.9 0l34.6 34.6c18.7 18.7 18.7 49.1 0 67.9L116.5 497.9c-18.7 18.7-49.1 18.7-67.9 0L14.1 463.3zM347.6 187.6l105-105L429.4 59.3l-105 105 23.3 23.3z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" /></svg>
                                </div>


                            </div>


                            <div className='carousel__item__hoverPropsContainer'>
                                <div className='carousel__item__hover__propsItem'>
                                    <div className='firstPropsContainer'>
                                        <div className='firstPropsContainer__ratingText'>8,1
                                        </div>
                                        <div className='firstPropsContainer__ratingContainer'>
                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>
                                        </div>


                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='secondPropsContainer'>
                                        <div className='secondPropsContainer__text'>
                                            сюжет
                                        </div>

                                        <div className='ratingLineMAIN bigLine'>
                                            <div className='ratingLinePROGRESS bigLine'></div>
                                        </div>
                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='thirdPropsContainer'>
                                        <div className='third_textLine'>2012-2017, США, Приключения
                                        </div>
                                        <div className='third_textLine'>
                                            5 сезонов
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='carousel__item__ageBage'>
                            <div className='carousel__item__ageBage__text'>16+</div>
                        </div>


                    </div>


                    <div className='carousel__item__textSection'>
                        <div className='carousel__item__title'>Оранжевая корова</div>
                        <div className='carousel__item__extra'>Бесплатно</div>
                    </div>
                </div>

                <div className='carousel__item'>
                    <div className='carousel__item__imgSection'>
                        <div className='carousel__item__imageWrapper'>
                            <img className='carousel__item__imageProps' src={orangeCow} alt="" />
                        </div>

                        <div className='carousel__item__hoverContainer'>
                            <div className='carousel__item__hoverBtnContainer'>
                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" /></svg>
                                </div>

                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M14.1 463.3c-18.7-18.7-18.7-49.1 0-67.9L395.4 14.1c18.7-18.7 49.1-18.7 67.9 0l34.6 34.6c18.7 18.7 18.7 49.1 0 67.9L116.5 497.9c-18.7 18.7-49.1 18.7-67.9 0L14.1 463.3zM347.6 187.6l105-105L429.4 59.3l-105 105 23.3 23.3z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" /></svg>
                                </div>


                            </div>


                            <div className='carousel__item__hoverPropsContainer'>
                                <div className='carousel__item__hover__propsItem'>
                                    <div className='firstPropsContainer'>
                                        <div className='firstPropsContainer__ratingText'>8,1
                                        </div>
                                        <div className='firstPropsContainer__ratingContainer'>
                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>
                                        </div>


                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='secondPropsContainer'>
                                        <div className='secondPropsContainer__text'>
                                            сюжет
                                        </div>

                                        <div className='ratingLineMAIN bigLine'>
                                            <div className='ratingLinePROGRESS bigLine'></div>
                                        </div>
                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='thirdPropsContainer'>
                                        <div className='third_textLine'>2012-2017, США, Приключения
                                        </div>
                                        <div className='third_textLine'>
                                            5 сезонов
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='carousel__item__ageBage'>
                            <div className='carousel__item__ageBage__text'>16+</div>
                        </div>


                    </div>


                    <div className='carousel__item__textSection'>
                        <div className='carousel__item__title'>Оранжевая корова</div>
                        <div className='carousel__item__extra'>Бесплатно</div>
                    </div>
                </div>

                <div className='carousel__item'>
                    <div className='carousel__item__imgSection'>
                        <div className='carousel__item__imageWrapper'>
                            <img className='carousel__item__imageProps' src={orangeCow} alt="" />
                        </div>

                        <div className='carousel__item__hoverContainer'>
                            <div className='carousel__item__hoverBtnContainer'>
                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" /></svg>
                                </div>

                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M14.1 463.3c-18.7-18.7-18.7-49.1 0-67.9L395.4 14.1c18.7-18.7 49.1-18.7 67.9 0l34.6 34.6c18.7 18.7 18.7 49.1 0 67.9L116.5 497.9c-18.7 18.7-49.1 18.7-67.9 0L14.1 463.3zM347.6 187.6l105-105L429.4 59.3l-105 105 23.3 23.3z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" /></svg>
                                </div>


                            </div>


                            <div className='carousel__item__hoverPropsContainer'>
                                <div className='carousel__item__hover__propsItem'>
                                    <div className='firstPropsContainer'>
                                        <div className='firstPropsContainer__ratingText'>8,1
                                        </div>
                                        <div className='firstPropsContainer__ratingContainer'>
                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>
                                        </div>


                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='secondPropsContainer'>
                                        <div className='secondPropsContainer__text'>
                                            сюжет
                                        </div>

                                        <div className='ratingLineMAIN bigLine'>
                                            <div className='ratingLinePROGRESS bigLine'></div>
                                        </div>
                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='thirdPropsContainer'>
                                        <div className='third_textLine'>2012-2017, США, Приключения
                                        </div>
                                        <div className='third_textLine'>
                                            5 сезонов
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='carousel__item__ageBage'>
                            <div className='carousel__item__ageBage__text'>16+</div>
                        </div>


                    </div>


                    <div className='carousel__item__textSection'>
                        <div className='carousel__item__title'>Оранжевая корова</div>
                        <div className='carousel__item__extra'>Бесплатно</div>
                    </div>
                </div>

                <div className='carousel__item'>
                    <div className='carousel__item__imgSection'>
                        <div className='carousel__item__imageWrapper'>
                            <img className='carousel__item__imageProps' src={orangeCow} alt="" />
                        </div>

                        <div className='carousel__item__hoverContainer'>
                            <div className='carousel__item__hoverBtnContainer'>
                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" /></svg>
                                </div>

                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M14.1 463.3c-18.7-18.7-18.7-49.1 0-67.9L395.4 14.1c18.7-18.7 49.1-18.7 67.9 0l34.6 34.6c18.7 18.7 18.7 49.1 0 67.9L116.5 497.9c-18.7 18.7-49.1 18.7-67.9 0L14.1 463.3zM347.6 187.6l105-105L429.4 59.3l-105 105 23.3 23.3z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" /></svg>
                                </div>


                            </div>


                            <div className='carousel__item__hoverPropsContainer'>
                                <div className='carousel__item__hover__propsItem'>
                                    <div className='firstPropsContainer'>
                                        <div className='firstPropsContainer__ratingText'>8,1
                                        </div>
                                        <div className='firstPropsContainer__ratingContainer'>
                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>
                                        </div>


                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='secondPropsContainer'>
                                        <div className='secondPropsContainer__text'>
                                            сюжет
                                        </div>

                                        <div className='ratingLineMAIN bigLine'>
                                            <div className='ratingLinePROGRESS bigLine'></div>
                                        </div>
                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='thirdPropsContainer'>
                                        <div className='third_textLine'>2012-2017, США, Приключения
                                        </div>
                                        <div className='third_textLine'>
                                            5 сезонов
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='carousel__item__ageBage'>
                            <div className='carousel__item__ageBage__text'>16+</div>
                        </div>


                    </div>


                    <div className='carousel__item__textSection'>
                        <div className='carousel__item__title'>Оранжевая корова</div>
                        <div className='carousel__item__extra'>Бесплатно</div>
                    </div>
                </div>

                <div className='carousel__item'>
                    <div className='carousel__item__imgSection'>
                        <div className='carousel__item__imageWrapper'>
                            <img className='carousel__item__imageProps' src={orangeCow} alt="" />
                        </div>

                        <div className='carousel__item__hoverContainer'>
                            <div className='carousel__item__hoverBtnContainer'>
                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" /></svg>
                                </div>

                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M14.1 463.3c-18.7-18.7-18.7-49.1 0-67.9L395.4 14.1c18.7-18.7 49.1-18.7 67.9 0l34.6 34.6c18.7 18.7 18.7 49.1 0 67.9L116.5 497.9c-18.7 18.7-49.1 18.7-67.9 0L14.1 463.3zM347.6 187.6l105-105L429.4 59.3l-105 105 23.3 23.3z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" /></svg>
                                </div>


                            </div>


                            <div className='carousel__item__hoverPropsContainer'>
                                <div className='carousel__item__hover__propsItem'>
                                    <div className='firstPropsContainer'>
                                        <div className='firstPropsContainer__ratingText'>8,1
                                        </div>
                                        <div className='firstPropsContainer__ratingContainer'>
                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>
                                        </div>


                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='secondPropsContainer'>
                                        <div className='secondPropsContainer__text'>
                                            сюжет
                                        </div>

                                        <div className='ratingLineMAIN bigLine'>
                                            <div className='ratingLinePROGRESS bigLine'></div>
                                        </div>
                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='thirdPropsContainer'>
                                        <div className='third_textLine'>2012-2017, США, Приключения
                                        </div>
                                        <div className='third_textLine'>
                                            5 сезонов
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='carousel__item__ageBage'>
                            <div className='carousel__item__ageBage__text'>16+</div>
                        </div>


                    </div>


                    <div className='carousel__item__textSection'>
                        <div className='carousel__item__title'>Оранжевая корова</div>
                        <div className='carousel__item__extra'>Бесплатно</div>
                    </div>
                </div>

                <div className='carousel__item'>
                    <div className='carousel__item__imgSection'>
                        <div className='carousel__item__imageWrapper'>
                            <img className='carousel__item__imageProps' src={orangeCow} alt="" />
                        </div>

                        <div className='carousel__item__hoverContainer'>
                            <div className='carousel__item__hoverBtnContainer'>
                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" /></svg>
                                </div>

                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M14.1 463.3c-18.7-18.7-18.7-49.1 0-67.9L395.4 14.1c18.7-18.7 49.1-18.7 67.9 0l34.6 34.6c18.7 18.7 18.7 49.1 0 67.9L116.5 497.9c-18.7 18.7-49.1 18.7-67.9 0L14.1 463.3zM347.6 187.6l105-105L429.4 59.3l-105 105 23.3 23.3z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" /></svg>
                                </div>


                            </div>


                            <div className='carousel__item__hoverPropsContainer'>
                                <div className='carousel__item__hover__propsItem'>
                                    <div className='firstPropsContainer'>
                                        <div className='firstPropsContainer__ratingText'>8,1
                                        </div>
                                        <div className='firstPropsContainer__ratingContainer'>
                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>
                                        </div>


                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='secondPropsContainer'>
                                        <div className='secondPropsContainer__text'>
                                            сюжет
                                        </div>

                                        <div className='ratingLineMAIN bigLine'>
                                            <div className='ratingLinePROGRESS bigLine'></div>
                                        </div>
                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='thirdPropsContainer'>
                                        <div className='third_textLine'>2012-2017, США, Приключения
                                        </div>
                                        <div className='third_textLine'>
                                            5 сезонов
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='carousel__item__ageBage'>
                            <div className='carousel__item__ageBage__text'>16+</div>
                        </div>


                    </div>


                    <div className='carousel__item__textSection'>
                        <div className='carousel__item__title'>Оранжевая корова</div>
                        <div className='carousel__item__extra'>Бесплатно</div>
                    </div>
                </div>

                <div className='carousel__item'>
                    <div className='carousel__item__imgSection'>
                        <div className='carousel__item__imageWrapper'>
                            <img className='carousel__item__imageProps' src={orangeCow} alt="" />
                        </div>

                        <div className='carousel__item__hoverContainer'>
                            <div className='carousel__item__hoverBtnContainer'>
                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" /></svg>
                                </div>

                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M14.1 463.3c-18.7-18.7-18.7-49.1 0-67.9L395.4 14.1c18.7-18.7 49.1-18.7 67.9 0l34.6 34.6c18.7 18.7 18.7 49.1 0 67.9L116.5 497.9c-18.7 18.7-49.1 18.7-67.9 0L14.1 463.3zM347.6 187.6l105-105L429.4 59.3l-105 105 23.3 23.3z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" /></svg>
                                </div>


                            </div>


                            <div className='carousel__item__hoverPropsContainer'>
                                <div className='carousel__item__hover__propsItem'>
                                    <div className='firstPropsContainer'>
                                        <div className='firstPropsContainer__ratingText'>8,1
                                        </div>
                                        <div className='firstPropsContainer__ratingContainer'>
                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>
                                        </div>


                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='secondPropsContainer'>
                                        <div className='secondPropsContainer__text'>
                                            сюжет
                                        </div>

                                        <div className='ratingLineMAIN bigLine'>
                                            <div className='ratingLinePROGRESS bigLine'></div>
                                        </div>
                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='thirdPropsContainer'>
                                        <div className='third_textLine'>2012-2017, США, Приключения
                                        </div>
                                        <div className='third_textLine'>
                                            5 сезонов
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='carousel__item__ageBage'>
                            <div className='carousel__item__ageBage__text'>16+</div>
                        </div>


                    </div>


                    <div className='carousel__item__textSection'>
                        <div className='carousel__item__title'>Оранжевая корова</div>
                        <div className='carousel__item__extra'>Бесплатно</div>
                    </div>
                </div>

                <div className='carousel__item'>
                    <div className='carousel__item__imgSection'>
                        <div className='carousel__item__imageWrapper'>
                            <img className='carousel__item__imageProps' src={orangeCow} alt="" />
                        </div>

                        <div className='carousel__item__hoverContainer'>
                            <div className='carousel__item__hoverBtnContainer'>
                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" /></svg>
                                </div>

                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M14.1 463.3c-18.7-18.7-18.7-49.1 0-67.9L395.4 14.1c18.7-18.7 49.1-18.7 67.9 0l34.6 34.6c18.7 18.7 18.7 49.1 0 67.9L116.5 497.9c-18.7 18.7-49.1 18.7-67.9 0L14.1 463.3zM347.6 187.6l105-105L429.4 59.3l-105 105 23.3 23.3z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" /></svg>
                                </div>


                                <div className='carousel__item__hover__btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" /></svg>
                                </div>


                            </div>


                            <div className='carousel__item__hoverPropsContainer'>
                                <div className='carousel__item__hover__propsItem'>
                                    <div className='firstPropsContainer'>
                                        <div className='firstPropsContainer__ratingText'>8,1
                                        </div>
                                        <div className='firstPropsContainer__ratingContainer'>
                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>

                                            <div className='ratingLineMAIN'>
                                                <div className='ratingLinePROGRESS'></div>
                                            </div>
                                        </div>


                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='secondPropsContainer'>
                                        <div className='secondPropsContainer__text'>
                                            сюжет
                                        </div>

                                        <div className='ratingLineMAIN bigLine'>
                                            <div className='ratingLinePROGRESS bigLine'></div>
                                        </div>
                                    </div>
                                </div>


                                <div className='carousel__item__hover__propsItem'>
                                    <div className='thirdPropsContainer'>
                                        <div className='third_textLine'>2012-2017, США, Приключения
                                        </div>
                                        <div className='third_textLine'>
                                            5 сезонов
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='carousel__item__ageBage'>
                            <div className='carousel__item__ageBage__text'>16+</div>
                        </div>


                    </div>


                    <div className='carousel__item__textSection'>
                        <div className='carousel__item__title'>Оранжевая корова</div>
                        <div className='carousel__item__extra'>Бесплатно</div>
                    </div>
                </div>
            </div>


            <div className='carousel__arrowContainer rightArrow'></div>

        </div>
    );
};

export default Carousel;