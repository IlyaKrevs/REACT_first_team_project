import React from 'react';

const SomeFilters = () => {
    return (
        <div>
            <div className='filter__itemCotainer'>
                <div className='filter__itemENTIRE'>
                    <div className='filter__itemContainer__title'>Жанры</div>
                    <input className='input__range' type="range" step='0.1' min='0' max='10' />
                    <div className='rangeValueText'>123</div>
                </div>
            </div>


            <div className='filter__itemCotainer'>
                <div className='filter__itemENTIRE'>
                    <div className='filter__itemContainer__title'>Режисёр</div>
                    <input className='inputREGISERTEXT' type="text" />
                </div>
            </div>

        </div>
    );
};

export default SomeFilters;