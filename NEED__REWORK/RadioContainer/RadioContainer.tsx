import React from 'react';

const RadioContainer = () => {
    return (
        <div className='filter__radio__container'>
            <div className="filter__radio__label">
                <input className='filter__radioBOX' type="radio" />
                <div className='filter__radio__text'>Все годы</div>

                <div className="filter__radio__img">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" /></svg>
                </div>
            </div>
        </div>
    );
};

export default RadioContainer;