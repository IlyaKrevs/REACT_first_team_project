import React from 'react';
import bigPhoto from '../../img/bigSLIDERPHOTO.jpg'


const BIGSlider = () => {
    return (
        <div className="bigSlider">
            <div className="bigSliderContainer">


                <div className="bigSlider__carouselItem">
                    <img className='bigSlider__IMAGE' src={bigPhoto} alt="bigPhoto" />

                    <div className='bigSlider__carouselCONTENT'>
                        <div className='bigSlider__carouselItem__title'>Создано Иви</div>
                        <div className='bigSlider__carouselItem__sinopsys'>Целый вагон впечатлений и тележка эмоций: все проекты производства Иви в одном месте. Запрыгивай!</div>
                    </div>
                    <div className='bigSliderButtonContainer'>
                        <div className='subscribeButton'>
                            <p>Оплатить подписку</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BIGSlider;