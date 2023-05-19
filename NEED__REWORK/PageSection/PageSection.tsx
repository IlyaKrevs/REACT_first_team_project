import React from 'react';
import personPhoto from '../../img/personPhoto.jpg'


const PageSection = () => {
    return (
        <div className="pageSection">
            <div className="pageSection__container">
                <div className="pageSection__container__inner">
                    <div className="personPage__item">
                        <div className="personPage__personHead">


                            <div className="personHead__photo">
                                <img src={personPhoto} alt='personPhoto' />
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageSection;