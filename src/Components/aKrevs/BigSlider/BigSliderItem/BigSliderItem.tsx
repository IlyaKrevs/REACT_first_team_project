import React from 'react';
import classes from './BigSliderItem.module.css';

import BigSliderDescriptionItem from './BigSliderDescriptionItem/BigSliderDescriptionItem';


interface BigSliderItemProps {
    color: 'first' | 'second' | 'third' | 'fourth' | 'fiveth',
}

const BigSliderItem = ({ color }: BigSliderItemProps) => {

    let ruTitle = 'Данный проект выполнен в учебных целях';

    let currentTitle = ruTitle;

    let currentColor;

    if (color === 'first') {
        currentColor = classes.colorFirst;
    } else if (color === 'second') {
        currentColor = classes.colorSecond;
    } else if (color === 'third') {
        currentColor = classes.colorThird;
    } else if (color === 'fourth') {
        currentColor = classes.colorFourth;
    } else if (color === 'fiveth') {
        currentColor = classes.colorFiveth;
    }

    let nameArr = ['Кревс Илья', 'Носаченко Артём', 'Черепаха Севиль', 'Лямина Ирина',];
    let ghArr = ['https://github.com/IlyaKrevs', 'https://github.com/Keronon', 'https://github.com/Sivilenok', 'https://github.com/vivir-para-volar',];
    let tgArr = ['@rm_dlb', '@Keronon', '@sivilenok', '@IreneLyamina',];


    let objArr = [];

    for (let i = 0; i < nameArr.length; i++) {
        objArr.push({
            name: nameArr[i],
            github: ghArr[i],
            telegram: tgArr[i],
        })

    }

    return (
        <div className={[classes.mainContainer, currentColor].join(' ')}>
            <div className={classes.titleTextContainer}>
                {currentTitle}
            </div>
            <div className={classes.descriptionTextContainer}>
                <div className={classes.descriptionBig}>Front-end:</div>
                <div className={classes.descriptionBig}>Back-end:</div>

                {objArr.map((item, index) => {
                    return <BigSliderDescriptionItem
                        key={index}
                        name={item.name}
                        github={item.github}
                        telegram={item.telegram} />
                })}
            </div>
        </div>

    );
};

export default BigSliderItem;