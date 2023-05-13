import React from 'react';

const SortDropMenu = () => {
    return (
        <div className='sort__container'>

            <div className="sortDropMenu">
                <div className='sortDropMenu__imageContainer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M576 0c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V32c0-17.7 14.3-32 32-32zM448 96c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V128c0-17.7 14.3-32 32-32zM352 224V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32s32 14.3 32 32zM192 288c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32zM96 416v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V416c0-17.7 14.3-32 32-32s32 14.3 32 32z" /></svg>
                </div>

                <div className='sortDropMenu__title'>По популярности</div>

                <div className='sortDropMenu__arrow'>
                    <div className='miniArrow'>
                    </div>
                </div>
            </div>


            <div className='sortDropDown__container'>
                <div className='sortDropDown__title'>Сортировать</div>
                <div className='sortDropDown__item'>
                    <div className='sortDropDown__item__SELECTEDSTRIPE'></div>
                    <div className='sortDropDown__item__text'>123</div>
                </div>

                <div className='sortDropDown__item'>
                    <div className='sortDropDown__item__text'>123</div>
                </div>

                <div className='sortDropDown__item'>
                    <div className='sortDropDown__item__text'>123</div>
                </div>

                <div className='sortDropDown__item'>
                    <div className='sortDropDown__item__text'>123</div>
                </div>

                <div className='sortDropDown__item'>
                    <div className='sortDropDown__item__text'>123</div>
                </div>

            </div>

        </div>
    );
};

export default SortDropMenu;